import { Response, Request } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { userModel } from "../models/userAccountScehma";
import { userSchema } from "./validator";
import { BaseController } from "../baseController";
import { resolve } from "path";
import config from "../config";

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

      // Find user by email and select only the required fields
      const user = await userModel
        .findOne({ email: email }, { name: 1, phone: 1, email: 1, password: 1 })
        .exec();

      if (!user) {
        return super.response(res, 404, false, "User not found");
      }

      // Compare the provided password with the hashed password stored in the database
      const isValidPassword = await bcrypt.compare(password, user.password);

      if (!isValidPassword) {
        return super.response(res, 401, false, "Invalid credentials");
      }

      // Generate JWT token
      const token = jwt.sign(
        {
          _id: user._id,
          email: user.email,
          exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24, // Token expires after 24 hours
        },
        config.Jwt_Secret,
      );

      // Set cookie with the token
      res.cookie("Token", token, {
        maxAge: 86_400_000, // Cookie expires after 24 hours
        httpOnly: true,
        sameSite: "none",
        secure: true,
      });

      // Send successful login response
      return super.response(res, 200, true, "Login successful", {
        user: {
          name: user.name,
          phone: user.phone,
          email: user.email,
        },
      });
    } catch (error) {
      console.error(error);
      return super.response(res, 500, false, "Internal Server Error");
    }
  };

  logout = async (req: Request, res: Response) => {
    res.clearCookie("Token", {
      httpOnly: true,
      sameSite: "none",
      secure: true,
    });
    return super.response(res, 200, true, "Logout successful");
  };
}
