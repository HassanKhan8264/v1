
import express from "express";
import http from "http";
import db, { onConnect } from "./db";
import config from "./config";
import mongoose from "mongoose";
import cors from "cors";
// import userRoute from "./api/user/index";

const app = express();
const server = http.createServer(app);

app.use(express.json());
app.use(cors());

// app.use('/api', userRoute);

console.log('just for checing');
console.log('just for checing');
console.log('just for checing');
console.log('just for checing');
console.log('just for checing');
console.log('just for checing');

db.onConnect()
 .then((_db) => {
    server.listen(config.PORT);
    server.on("error", onError);
    server.on("listening", onListening);
  })
 .catch((error) => {
    console.error("Error connecting to the database:", error);
    process.exit(1); // Exit the process if database connection fails
  });

function onError(error: NodeJS.ErrnoException) {
  if (error.syscall!== "listen") {
    throw error;
  }
  const bind =
    typeof config.PORT === "string"
     ? `Pipe ${config.PORT}`
      : `Port ${config.PORT}`;
  switch (error.code) {
    case "EACCES":
      console.error(`${bind} requires elevated privileges`);
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(`${bind} is already in use`);
      process.exit(1);
      break;
    default:
      throw error;
  }
}

function onListening() {
  console.log(`Server is running on port ${config.PORT}`);
}