import mongoose from 'mongoose';
import config from '../config';
mongoose.Promise = Promise;

const db = mongoose.createConnection(config.MONGO.URI);

export default db;
