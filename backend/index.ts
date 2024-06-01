import express from "express";
import config from "./config";
import bodyParser from "body-parser";
import cors from "cors";
import router from "./routes";
import cookieParser from "cookie-parser";
import testCookie from "./middleware";
const app = express();

app.use(cookieParser());
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());
app.use("/api", router);

// testTokenMiddleware
app.use(testCookie);

app.listen(config.PORT, () => {
  console.log(`Server is running on port ${config.PORT}`);
});
