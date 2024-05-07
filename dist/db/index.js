"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.events = exports.onConnect = exports.db = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const events_1 = require("events");
const config_1 = __importDefault(require("../config"));
const dbEvents = new events_1.EventEmitter();
const dbOption = {};
let isConnected;
exports.db = new events_1.EventEmitter();
const connectToMongoDB = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield mongoose_1.default.connect(config_1.default.MONGO.uri, dbOption);
        isConnected = true;
        exports.db.emit("connected");
        console.log("Mongoose is connected");
    }
    catch (err) {
        exports.db.emit("disconnected");
        console.error("Error connecting to MongoDB:", err);
        throw err;
    }
});
connectToMongoDB();
const handleOnConnect = () => __awaiter(void 0, void 0, void 0, function* () {
    if (!isConnected) {
        yield new Promise((resolve) => {
            exports.db.once("connected", resolve);
        });
    }
    console.log("Database connection is established. Perform other tasks here.");
});
exports.onConnect = handleOnConnect;
exports.events = dbEvents;
//# sourceMappingURL=index.js.map