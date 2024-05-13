import express from "express";
import http from "http";
import config from "./config";
import cors from "cors";
import bodyParser from 'body-parser';
import router from './api/user';
const app = express();



app.use(express.json());
app.use(bodyParser.json());
app.use(cors());
const server = http.createServer(app);
app.use('/api', router)



server.listen(config.PORT, () => {
  console.log(`Server is running on port ${config.PORT}`);
});