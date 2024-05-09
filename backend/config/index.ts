import * as dotenv from "dotenv";

dotenv.config();

const config = {
  PORT: process.env.ENV || 5001,
  MONGO: {
    URI: process.env.MONGODB_URI,
  },
};

export default config;
