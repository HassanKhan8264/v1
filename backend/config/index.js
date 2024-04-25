require("dotenv").config();

const all = {
  PORT: process.env.NODE.ENV || 5001,
  MONGO: {
    uri: process.env.MONGODB_URI,
  },
};

module.exports = all;
