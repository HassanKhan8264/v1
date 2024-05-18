import express from "express";
import http from "http";
import config from "./config";
import bodyParser from 'body-parser';
import cors from "cors";
import router from './api/user';
import jwt from "jsonwebtoken";

const app = express();



app.use(express.json());
app.use(bodyParser.json());
app.use(cors());
const server = http.createServer(app);
app.use('/api', router)



server.listen(config.PORT, () => {
  console.log(`Server is running on port ${config.PORT}`);
});