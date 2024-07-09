import { Request, Response } from "express";
import { tweetModel } from "../../models/tweetSchema";
import mongoose, { ObjectId } from "mongoose";
import { BaseController } from "../../baseController";

export class TweetCtrl extends BaseController {
  addTweet = async (req: Request, res: Response) => {
    console.log("API is working");
    try {
      const userId = new mongoose.Types.ObjectId(req.body.token._id);
      const { text } = req.body;
      if (!text) {
        return super.response(res, 400, false, "Tweet text is required");
      }
      const userData = await tweetModel.create({
        owner: userId,
        text: text,
      });
      return super.response(res, 200, true, null, userData);
    } catch (err) {
      return super.response(res, 500, true, "Internal Server Error");
    }
  };

  deleteAll = async (req, res) => {
    try {
      let allUsers = await tweetModel.deleteMany({});
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
      const userId = new mongoose.Types.ObjectId(req.body.token_id);
      let allUser = await tweetModel.find(
        { onwer: userId },
        {},
        { sort: { _id: -1 }, skip: 0, limit: 100 }
      );
      return super.response(res, 200, true, "all user geted of this user", {
        data: allUser,
      });
    } catch (err) {
      return super.response(res, 500, true, "Internal Server Error");
    }
  };
  getOneByUsername = async (req, res) => {
    try {
      let { name } = req.body;

      let user = await tweetModel.findOne({ name: name });
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
    } catch (err) {
      return super.response(res, 500, true, "Internal Server Error");
    }
  };
  deleteUser = async (req, res) => {
    try {
      let userId = req.query.user_id;
      let user = await tweetModel.deleteOne({ _id: userId });
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
