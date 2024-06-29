import { authController } from "../auth/authControler";
import { Request, Response } from "express";
import { UserCtrl } from "../apis/userCrud/userController";
import express from "express";
import { authenticateToken } from "../middleware/middleware";
import { testModel } from "../models/testSchema";
import mongoose from "mongoose";
import { skip } from "node:test";
const router = express.Router();
const userController = new UserCtrl();
const authControler = new authController();

// authentication
router.post("/auth/register", authControler.signUp);
router.post("/auth/login", authControler.login);
router.post("/auth/logout", authControler.logout);

// router.post("/testData", authControler.testData);
// router.get("/getAllTest", authControler.getAllTest);
// userAuthentication
router.get(
  "/verifyTokenStatus",
  authenticateToken,
  (req: Request, res: Response) => {
    res.json({ authenticated: true, user: req.user });
  },
);
router.get(
  "/getAllTest",
  authenticateToken,
  async (req: Request, res: Response) => {
    try {
      let userId = new mongoose.Types.ObjectId(req.body.token._id);
      let allUser = await testModel.find(
        { owner: userId },
        {},
        { sort: { _id: -1 }, skip: 0, limit: 100 },
      );
      res.send({ data: allUser });
    } catch (err) {
      console.error(err);
      res.status(500).json({
        success: false,
        message: "Internal Server Error",
      });
    }
  },
);

router.post(
  "/testData",
  authenticateToken,
  async (req: Request, res: Response) => {
    const { data } = req.body;
    try {
      const userId = new mongoose.Types.ObjectId(req.body.token._id);

      // Create a new document with the user's userId
      const newUser = await testModel.create({
        owner: userId,
        data: data,
      });

      console.log("Data saved:", newUser);
      res.status(200).json(newUser);
    } catch (error) {
      console.error(error);
      res.status(500).json({
        success: false,
        message: "Internal Server Error",
      });
    }
  },
);
// Crud Operation
router.post("/addUser", userController.addUser);
router.put("/user", userController.updateUser);
router.get("/getUserByUsername", userController.getOneByUsername);
router.get("/getAllUsers", userController.getAll);
router.delete("/deleteAll", userController.deleteAll);
router.delete("/user", userController.deleteUser);

export default router;
