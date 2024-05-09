import express from "express";
import http from "http";
import db from './db';
import config from "./config";
import cors from "cors";
import bodyParser from 'body-parser';

const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());


const server = http.createServer(app);
db.on('connected', () => {
  console.log('MongoDB connected successfully');
});
db.on('error', (error) => {
  console.error('MongoDB connection error:', error);
});
db.on('disconnected', () => {
  console.log('Database connection lost, attempting to reconnect...');
});
server.listen(config.PORT, () => {
  console.log(`Server is running on port ${config.PORT}`);
});