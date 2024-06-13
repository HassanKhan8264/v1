import { Response, Request, NextFunction } from "express";
import jwt from "jsonwebtoken";
import config from "../config";

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
