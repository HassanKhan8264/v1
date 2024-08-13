import * as mongoose from "mongoose";
import db from "../db";

const { Schema } = mongoose;
const { Types } = Schema;

export interface IUserModel extends mongoose.Document {
  isDelete: Boolean;
  tweet: String;
  // owner: mongoose.ObjectId;
}

const TweetSchema = new Schema({
  tweet: { type: String, required: true },
  owner: { type: Schema.Types.ObjectId, required: true },
  isDelete: { type: Boolean, default: false },
  createOn: { type: Date, default: Date.now },
});

export const TweetModellName = "tweet";
export const tweetModel = db.model<IUserModel>(
  TweetModellName,
  TweetSchema as any,
);
