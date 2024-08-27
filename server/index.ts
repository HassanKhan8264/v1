import express from "express";
import config from "./config";
import bodyParser from "body-parser";
import cors from "cors";
import router from "./routes/routes";
import cookieParser from "cookie-parser";

const app = express();

app.use(cookieParser());
app.use(express.json());
app.use(bodyParser.json());
app.use(
  cors({
    origin: ["http://localhost:4200", "http://127.0.0.1:4200"],
    credentials: true,
  })
);
app.use("/api/v1", router);
const fs = require("node:fs/promises");

const path = require("path");

// Define the directory path
const directoryPath = path.join("H:", "live projects", "v1 ols");
const filePath = path.join(directoryPath, "newFile.txt");

// Function to list files in the specified directory and format them as a comma-separated string
function listFormattedFiles(dirPath) {
  fs.readdir(dirPath, (err, files) => {
    if (err) {
      console.error("Error reading directory:", err);
      return;
    }

    // Filter out directories, leaving only files
    const filteredFiles = files.filter((file) => {
      const filePath = path.join(dirPath, file);
      const fileStat = fs.lstatSync(filePath);
      return fileStat.isFile();
    });

    // Format filenames as requested
    const formattedFiles = filteredFiles.join(", ");
    console.log(formattedFiles);
  });
}

// Ensure the directory exists and create it if not
// if (!fs.existsSync(directoryPath)) {
//   fs.mkdirSync(directoryPath, { recursive: true });
// }

// Create the file
fs.writeFile(filePath, "Hello, World! your are the ", (err) => {
  if (err) {
    console.error("Error creating file:", err);
    return;
  }
  console.log("File created successfully.");

  // Call the function to list and format files after creating the file
  listFormattedFiles(directoryPath);
});

app.listen(config.PORT, () => {
  console.log(`Server is running on port ${config.PORT}`);
});
