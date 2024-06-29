import { Request, Response } from "express";
import { userModel } from "../../models/userCrudSchema";
import mongoose, { ObjectId } from "mongoose";
import { userSchema } from "./validators";
import { BaseController } from "../../baseController";

export class UserCtrl extends BaseController {
  addUser = async (req: Request, res: Response) => {
    console.log("API is working");
    try {
      const { error } = userSchema.validate(req.body);
      if (error) {
        return super.response(res, 400, false, error.message);
      }
      const { name, email, phone, password, data } = req.body;
      const userData = await userModel.create({
        name,
        email,
        phone,
        password,
        data,
      });
      return super.response(res, 200, true, null, userData);
    } catch (err) {
      console.error(err);
      if (err.name === "ValidationError") {
        return super.response(res, 400, false, "Validation failed");
      } else {
        return super.response(res, 500, true, "Internal Server Error");
      }
    }
  };

  deleteAll = async (req, res) => {
    try {
      let allUsers = await userModel.deleteMany({});
      if (allUsers.deletedCount === 0) {
        return super.response(res, 400, false, "User not found");
      }
      super.response(res, 200, true, "user deleted successfully");
    } catch (err) {
      return super.response(res, 500, true, "Internal Server Error");
    }
  };
  getAll = async (req, res) => {
    try {
      let allUser = await userModel.find();
      res.json(allUser);
    } catch (err) {
      return super.response(res, 500, true, "Internal Server Error");
    }
  };
  getOneByUsername = async (req, res) => {
    try {
      let { name } = req.body;

      let user = await userModel.findOne({ name: name });
      if (!user) {
        return super.response(res, 400, false, "User not found");
      }
      res.json({ message: "user found", user: user });
    } catch (err) {
      return super.response(res, 500, true, "Internal Server Error");
    }
  };
  updateUser = async (req, res) => {
    try {
      let userId = req.query.user_id;
      if (!mongoose.Types.ObjectId.isValid(userId)) {
        return super.response(res, 400, false, "Invalid user ID");
      }
      const { name, email } = req.body;
      let user = await userModel.findById({ _id: userId });

      if (!user) {
        return super.response(res, 400, false, "User not found");
      }
      if (!name && !email) {
        return super.response(
          res,
          400,
          false,
          "Both name and email are required",
        );
      } else {
        user.name = name || user.name;
        user.email = email || user.email;
        let updatedUser = await user.save();
        // res.json({ user: updatedUser });
        return super.response(res, 200, true, "User Updated", {
          user: updatedUser,
        });
      }
    } catch (err) {
      return super.response(res, 500, true, "Internal Server Error");
    }
  };
  deleteUser = async (req, res) => {
    try {
      let userId = req.query.user_id;
      let user = await userModel.deleteOne({ _id: userId });
      if (user.deletedCount === 0) {
        return super.response(res, 400, false, "User not found");
      } else {
        return super.response(res, 200, true, "delete user");
      }
    } catch (err) {
      return super.response(res, 500, true, "Internal Server Error");
    }
  };
}
