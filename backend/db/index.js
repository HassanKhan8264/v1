const mongoose = require("mongoose");
const EventEmitter = require("events");
const config = require("../config");

const dbOption = {
  // useNewUrlParser: true,
  // useUnifiedTopology: true,
  // useCreateIndex: true,
  // useFindAndModify: false,
};
// MONGO: {
//   URI: process.env.MONGODB_URI,
const db = mongoose.createConnection(config.MONGO.URI, dbOption);

let isConnected;
const dbEvents = new EventEmitter();

db.on("connected", () => {
  isConnected = true;
  dbEvents.emit("connected");
  console.log("Mongoose successfully connected");
});

db.on("error", (err) => {
  dbEvents.emit("disconnected");
  console.log(`Mongoose connection error: ${err}`);
});

db.on("disconnected", () => {
  dbEvents.emit("disconnected");
  console.log("Mongoose connection disconnected");
});

// Close the Mongoose connection If the Node process ends
process.on("SIGINT", () => {
  db.close(() => {
    console.log("Mongoose connection closed");
    process.exit(0);
  });
});

// eslint-disable-next-line no-multi-assign
exports = module.exports = db;

exports.onConnect = () => {
  return new Promise((resolve) => {
    if (isConnected) {
      resolve(db);
    }
    db.on("connected", () => {
      resolve(db);
    });
  });
};

exports.events = dbEvents;
