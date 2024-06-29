import * as mongoose from "mongoose";
import db from "../db";

const { Schema } = mongoose;
const { Types } = Schema;

export interface ITestModel extends mongoose.Document {
  data: String;
}

const DataSchema = new Schema({
  owner: { type: Schema.Types.ObjectId, required: true },
  data: {
    type: String,
  },
});

export const modelName = "testModel";
export const testModel = db.model<ITestModel>(modelName, DataSchema as any);
