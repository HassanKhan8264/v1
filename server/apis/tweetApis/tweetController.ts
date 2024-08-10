import { Request, Response } from "express";
import { tweetModel } from "../../models/tweetSchema";
import mongoose, { ObjectId } from "mongoose";
import { BaseController } from "../../baseController";

export class TweetCtrl extends BaseController {
  addTweet = async (req: Request, res: Response) => {
    try {
      console.log("Request body:", req.body);

      const userId = new mongoose.Types.ObjectId(req.body.token._id);
      const { tweet } = req.body;

      if (!tweet) {
        console.error("Tweet text is missing");
        return super.response(res, 400, false, "Tweet text is required");
      }

      const userData = await tweetModel.create({
        owner: userId,
        tweet: tweet,
      });

      console.log("Tweet saved successfully:", userData);
      return super.response(res, 200, true, null, userData);
    } catch (err) {
      console.error("Error saving tweet:", err);
      return super.response(res, 500, true, "Internal Server Error");
    }
  };

  deleteAllTweets = async (req, res) => {
    try {
      const ownerId = new mongoose.Types.ObjectId(req.body.token._id);
      let allTweets = await tweetModel.deleteMany({ owner: ownerId });
      if (allTweets.deletedCount === 0) {
        return super.response(res, 400, false, "Tweets  not found");
      }
      super.response(res, 200, true, "all Tweets deleted successfully");
    } catch (err) {
      return super.response(res, 500, true, "Internal Server Error");
    }
  };
  getAll = async (req: Request, res: Response) => {
    try {
      const userId = new mongoose.Types.ObjectId(req.body.token._id);
      let allTweets = await tweetModel.find(
        { owner: userId, isDelete: false },
        {},
        { sort: { _id: -1 }, skip: 0, limit: 100 },
      );
      console.log("All tweets fetched:", allTweets);

      return super.response(
        res,
        200,
        true,
        "all user geted of this user",
        allTweets,
      );
    } catch (err) {
      return super.response(res, 500, true, "Internal Server Error");
    }
  };
  getOneByTweetText = async (req, res) => {
    try {
      let { text } = req.body;

      let foundedTweet = await tweetModel.findOne({ text: text });
      if (!foundedTweet) {
        return super.response(res, 400, false, "User not found");
      }
      res.json({ message: "tweet found", tweet: foundedTweet });
    } catch (err) {
      return super.response(res, 500, true, "Internal Server Error");
    }
  };
  findById = async (req, res) => {
    const id = req.query.tweet_id;

    tweetModel.findOne({ _id: id }, (err, data) => {
      if (!err) {
        if (data) {
          res.send({
            message: `get tweet by id: ${data._id} success`,
            data: data,
          });
        } else {
          res.status(404).send({
            message: "tweet not found",
          });
        }
      } else {
        res.status(500).send({
          message: "server error",
        });
      }
    });
  };
  updateTweet = async (req: Request, res: Response) => {
    const body = req.body;
    const id = req.query.tweet_id;
    const ownerId = new mongoose.Types.ObjectId(body.token._id);
    if (!body.text) {
      res.status(400).send(` required parameter missing. example request body:
        {
            "text": "value",
        }`);
      return;
    }
    try {
      let data = await tweetModel
        .findOneAndUpdate(
          {
            _id: id,
            owner: ownerId,
          },
          {
            text: body.text,
          },
          { new: true },
        )
        .exec();

      console.log("updated: ", data);

      res.send({
        message: "tweet modified successfully",
      });
    } catch (error) {
      res.status(500).send({
        message: "server error",
      });
    }
  };
  deleteTweet = async (req: Request, res: Response) => {
    try {
      const tweetId = req.query.tweet_id;
      const ownerId = new mongoose.Types.ObjectId(req.body.token._id);
      let user = await tweetModel.deleteOne({ _id: tweetId, owner: ownerId });
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
