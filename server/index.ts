import express from "express";
import config from "./config";
import bodyParser from "body-parser";
import cors from "cors";
import router from "./routes/routes";
import cookieParser from "cookie-parser";

const app = express();

app.use(cookieParser());
app.use(express.json());
app.use(bodyParser.json());
app.use(
  cors({
    origin: "http://localhost:4200",
    credentials: true,
  }),
);
app.use("/api/v1", router);

app.listen(config.PORT, () => {
  console.log(`Server is running on port ${config.PORT}`);
});
