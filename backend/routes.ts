import { authController } from "./jwtAuth/authControler";
import { UserCtrl } from "./api/user/userController";
import express from "express";

const router = express.Router();
const userController = new UserCtrl();
const authControler = new authController();

// authentication
router.post("/signUp", authControler.signUp);
router.post("/login", authControler.login);

// Crud Operation
router.post("/addUser", userController.addUser);
router.put("/user", userController.updateUser);
router.get("/getUserByUsername", userController.getOneByUsername);
router.get("/getAllUsers", userController.getAll);
router.delete("/deleteAll", userController.deleteAll);
router.delete("/user", userController.deleteUser);

export default router;