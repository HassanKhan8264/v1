import express from "express";
import config from "./config";
import bodyParser from "body-parser";
import cors from "cors";
import router from "./backend/routes";
import cookieParser from "cookie-parser";
import { authenticateToken } from "./backend/middleware";

// import testCookie from "./middleware";
const app = express();

app.use(cookieParser());
app.use(express.json());
app.use(bodyParser.json());
app.use(
  cors({
    origin: "http://localhost:4200", // Frontend URL
    credentials: true,
  }),
);
app.use("/api/v1", router);
// authenticateToken
// app.use(authenticateToken)

// testTokenMiddleware
// app.use(testCookie);

app.listen(config.PORT, () => {
  console.log(`Server is running on port ${config.PORT}`);
});
