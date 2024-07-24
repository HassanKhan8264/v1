import { authController } from "../auth/authControler";
import { Request, Response } from "express";
import express from "express";
import { TweetCtrl } from "../apis/tweetApis/tweetController";
import { authenticateToken } from "../middleware/middleware";
import mongoose from "mongoose";
const router = express.Router();
const tweetCtrl = new TweetCtrl();
const authControler = new authController();

// authentication
router.post("/auth/register", authControler.register);
router.post("/auth/login", authControler.login);
router.post("/auth/logout", authControler.logout);

// userAuthentication
router.get(
  "/verifyTokenStatus",
  authenticateToken,
  (req: Request, res: Response) => {
    res.json({ authenticated: true, user: req.user });
  },
);

// Crud Operation
router.post("/addTweet", authenticateToken, tweetCtrl.addTweet);
router.get("/getOneByTweetText", tweetCtrl.getOneByTweetText);
router.get("/getAllTweets", tweetCtrl.getAll);
router.get("/findById", tweetCtrl.findById);
router.put("/tweet", tweetCtrl.updateTweet);
router.delete("/tweet", tweetCtrl.deleteTweet);
router.delete("/deleteAllTweets", tweetCtrl.deleteAllTweets);

export default router;
