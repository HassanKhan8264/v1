const mongoose = require("mongoose");
const EventEmitter = require("events");
const config = require("./../config");

const dbOption = {
  // useNewUrlParser: true,
  // useUnifiedTopology: true,
  // mongodb+srv://Hassan8264:<password>@cluster0.hwnbzfk.mongodb.net/
};

let isConnected;
const dbEvents = new EventEmitter();

// Define an asynchronous function to connect to MongoDB
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

// Call the asynchronous function to connect to MongoDB
connectToMongoDB();

// Define a function to handle operations that require the database connection
const handleOnConnect = async () => {
  if (!isConnected) {
    await new Promise((resolve) => {
      dbEvents.once("connected", resolve);
    });
  }
  console.log("Database connection is established. Perform other tasks here.");
  // Perform other tasks that require the database connection here
};

exports.onConnect = handleOnConnect;
exports.events = dbEvents;
