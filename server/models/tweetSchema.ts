import * as mongoose from "mongoose";
import db from "../db";

const { Schema } = mongoose;
const { Types } = Schema;

export interface IUserModel extends mongoose.Document {
  isDelete: Boolean;
  text: String;
}

const TweetSchema = new Schema({
  text: { type: String, require: true },
  owner: { type: Schema.Types.ObjectId, required: true },
  isDelete: { typeof: Boolean, default: false },
  image: { type: String, require: true },
  createOn: { type: Date, default: Date.now },
});

export const TweetModellName = "tweet";
export const tweetModel = db.model<IUserModel>(
  TweetModellName,
  TweetSchema as any,
);
