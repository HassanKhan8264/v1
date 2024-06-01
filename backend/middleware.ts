import { Response, Request, NextFunction } from "express";
import jwt from "jsonwebtoken";
import config from "./config";

export function testCookie(req: Request, res: Response, next: NextFunction) {
  try {
    if (!req?.cookies?.Token) {
      res.status(401).send({
        message: "include http-only credentials with every request",
      });
      return;
    }
    jwt.verify(req.cookies.Token, config.Jwt_Secret, function (
      err,
      decodedData
    ) {
      let nowDate = new Date().getTime() / 1000;
      if (decodedData.exp < nowDate) {
        res.cookie("Token", "", {
          maxAge: 1,
          httpOnly: true,
        });
        res.send({ message: "token expired" });
      } else {
        req.body.token = decodedData;
        next();
      }
    });
  } catch (err) {
    res.status(401).send("invalid token");
  }
}

export function authenticateToken(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(" ")[1]; // Bearer <token>

  if (token == null) return res.sendStatus(401); // If no token, return 401 Unauthorized

  jwt.verify(token, config.Jwt_Secret, (err, decodedData) => {
    if (err) return res.sendStatus(401); // If token is invalid, return 403 Forbidden
    req.body.token = decodedData;
    next(); // Proceed to the next middleware or route handler
  });
}
