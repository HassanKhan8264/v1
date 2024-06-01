import { Response, Request } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt"; // Import bcrypt here
import { userModel } from "../models/userAccountScehma";
import { userSchema } from "./validator";
import { BaseController } from "../baseController";
import { resolve } from "path";
import config from "../config";
// import { Request, Response } from "../../custom";

export class authController extends BaseController {
  signUp = async (req: Request, res: Response) => {
    try {
      let { name, email, password, phone } = req.body;
      const { error } = userSchema.validate(req.body);
      if (error) {
        return super.response(res, 400, false, error.message);
      }

      const existingUser = await userModel.findOne({ email: email }).exec();
      if (existingUser) {
        return super.response(res, 400, false, "User already exists");
      }

      const hashedPassword = await new Promise((resolve, reject) => {
        bcrypt.hash(password, 10, (err, hash) => {
          if (err) {
            reject(err);
          } else {
            resolve(hash);
          }
        });
      });

      const newUser = await userModel.create({
        name: name,
        email: email,
        phone: phone,
        password: hashedPassword,
      });

      console.log("data saved: ", newUser);
      return super.response(res, 200, true);
    } catch (error) {
      console.error(error);
      return super.response(res, 500, false, "Internal Server Error");
    }
  };

  login = async (req: Request, res: Response) => {
    try {
      let { email, password } = req.body;
      if (!email || !password) {
        return super.response(res, 400, false, "Fields Missing");
      }
      const user = await userModel.findOne({ email: email }).exec();

      if (user && (await bcrypt.compare(password, user.password))) {
        const token = jwt.sign(
          {
            _id: user._id,
            email: user.email,
            exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24,
          },
          config.Jwt_Secret
        );

        res.cookie("Token", token, {
          maxAge: 86_400_000,
          httpOnly: true,
        });

        return super.response(res, 200, true, "login success", {
          token: token,
        });
      } else {
        return super.response(res, 401, false, "Invalid credentials");
      }
    } catch (error) {
      console.error(error);
      return super.response(res, 500, false, "Internal Server Error");
    }
  };

  logout = async (req: Request, res: Response) => {
    req.cookie("Token", "", {
      maxAge: 1,
      httpOnly: true,
    });
    return super.response(res, 200, true, "Logout successful");
  };
}
