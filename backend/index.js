const express = require("express");
const http = require("http");
const app = express();
const server = http.createServer(app);
const db = require("./db");
const config = require("./config");
const mongoose = require("mongoose");
const cors = require("cors");
app.use(express.json());
app.use(cors())
const userRoute = require("./api/user/index");
// const path = require("path");

app.use('/api', userRoute);




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

function onError(error) {
  if (error.syscall !== "listen") {
    throw error;
  }
  const bind =
    typeof config.port === "string"
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
