import * as dotenv from "dotenv";

// const dotenv = require("dotenv");

// Determine the environment based on NODE_ENV or a custom logic
let envFile = ".env.local"; // Default to local environment
if (process.env.NODE_ENV === "production") {
  envFile = ".env.production";
}

// Load the environment variables from the chosen.env file
dotenv.config({ path: envFile });

if (!process.env.MONGODB) {
  throw new Error("Missing MONGODB environment variable");
}

const all = {
  PORT: process.env.LOCALPORT || 3000,
  Jwt_Secret: process.env.SECRET,
  MONGO: {
    URI: process.env.MONGODB,
  },
};

export = all;
