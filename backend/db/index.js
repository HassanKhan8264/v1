const mongoose = require("mongoose");
const EventEmitter = require("events");
const config = require("./../config");

const dbOption = {
  // useNewUrlParser: true,
  // useUnifiedTopology: true,
};

let isConnected;
const dbEvents = new EventEmitter();

const connectToMongoDB = async () => {
  try {
    await mongoose.connect(config.MONGO.uri, dbOption);
    isConnected = true;
    dbEvents.emit("connected");
    console.log("Mongoose is connected");
  } catch (err) {
    dbEvents.emit("disconnected");
    console.error("Error connecting to MongoDB:", err);
    throw err;
  }
};

connectToMongoDB();

const handleOnConnect = async () => {
  if (!isConnected) {
    await new Promise((resolve) => {
      dbEvents.once("connected", resolve);
    });
  }
  console.log("Database connection is established. Perform other tasks here.");
};

exports.onConnect = handleOnConnect;
exports.events = dbEvents;
