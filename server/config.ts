import * as dotenv from "dotenv";

let envFile = ".env.local";
if (process.env.NODE_ENV === "production") {
  envFile = ".env.production";
}

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
