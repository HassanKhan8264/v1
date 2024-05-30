import * as dotenv from "dotenv";

dotenv.config();

const config = {
  Jwt_Secret: process.env.SECRET,
  PORT: process.env.ENV || process.env.LOCALPORT,
  MONGO: {
    URI:`${process.env.MONGODB_URI}/${process.env.DB_NAME}`,
  },
};

export default config;
