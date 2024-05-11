import mongoose from 'mongoose';
import config from '../config';
mongoose.Promise = Promise;

const db = mongoose.createConnection(config.MONGO.URI);


db.on('connected', () => {
    console.log('MongoDB connected successfully');
});
db.on('error', (error) => {
    console.error('MongoDB connection error:', error);
});
db.on('disconnected', () => {
    console.log('Database connection lost, attempting to reconnect...');
});

export default db;
