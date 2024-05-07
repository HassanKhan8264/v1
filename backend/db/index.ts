import mongoose from "mongoose";
import { EventEmitter } from "events";
import config from "../config";




// Define custom properties
interface CustomEventEmitter extends EventEmitter {
  onConnect: () => void;
}

const dbEvents = new EventEmitter() as CustomEventEmitter;



const dbOption = {
  // useNewUrlParser: true,
  // useUnifiedTopology: true,
};

let isConnected: boolean;
export const db = new EventEmitter();

const connectToMongoDB = async (): Promise<void> => {
  try {
    await mongoose.connect(config.MONGO.uri, dbOption);
    isConnected = true;
    db.emit("connected");
    console.log("Mongoose is connected");
  } catch (err) {
    db.emit("disconnected");
    console.error("Error connecting to MongoDB:", err);
    throw err;
  }
};

connectToMongoDB();

const handleOnConnect = async (): Promise<void> => {
  if (!isConnected) {
    await new Promise<void>((resolve) => {
      db.once("connected", resolve);
    });
  }
  console.log("Database connection is established. Perform other tasks here.");
};

export const onConnect = handleOnConnect;
export const events = dbEvents;
