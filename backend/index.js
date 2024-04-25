const express = require("express");
const http = require("http");
const app = express();
const server = http.createServer(app);
const db = require("./db");
const config = require("./config");
const mongoose = require("mongoose");
app.use(express.json());




const userDataSchema = new mongoose.Schema({
  name: String,
});

// Create the model
const UserData = mongoose.model("userData", userDataSchema);

// app.post("/data", async (req, res) => {
//   // console.log('Create');
//   // res.send('create user');
//   try {
//     // Extract data from the request body
//     const { name } = req.body;

//     // Create a new document using the model
//     const newData = new UserData({ name });

//     // Save the document to the database
//     const savedData = await newData.save();
    
//     // Send a success response with status code 201 and the saved data
//     res.status(201).json(savedData);
//   } catch (error) {
//     // Handle errors by sending an error response with status code 400 and the error message
//     res.status(400).json({ error: error.message });
//   }
// });
app.get("/data", async (req, res) => {
  // console.log('Create');
  res.send({
    message: "product added successfully"
});
  // try {
  //   // Extract data from the request body
  //   const { name } = req.body;

  //   // Create a new document using the model
  //   const newData = new UserData({ name });

  //   // Save the document to the database
  //   const savedData = await newData.save();
    
  //   // Send a success response with status code 201 and the saved data
  //   res.status(201).json(savedData);
  // } catch (error) {
  //   // Handle errors by sending an error response with status code 400 and the error message
  //   res.status(400).json({ error: error.message });
  // }
});


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
