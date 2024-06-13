import { authController } from "./jwtAuth/authControler";
import { UserCtrl } from "./api/user/userController";
import express from "express";
import { authenticateToken } from "./middleware";
const router = express.Router();
const userController = new UserCtrl();
const authControler = new authController();

// authentication
router.post("/auth/register", authControler.signUp);
router.post("/auth/login", authControler.login);
router.post("/auth/logout", authControler.logout);

// userAuthentication
// router.get(authenticateToken);
router.get("/check", authenticateToken, (req, res) => {
  // If middleware passed, user is authenticated
  res.json({ authenticated: true, user: req.user }); // Respond with authenticated status and user info
});

// Crud Operation
router.post("/addUser", userController.addUser);
router.put("/user", userController.updateUser);
router.get("/getUserByUsername", userController.getOneByUsername);
router.get("/getAllUsers", userController.getAll);
router.delete("/deleteAll", userController.deleteAll);
router.delete("/user", userController.deleteUser);

export default router;
