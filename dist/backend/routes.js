"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const authControler_1 = require("./jwtAuth/authControler");
const userController_1 = require("./api/user/userController");
const express_1 = __importDefault(require("express"));
const middleware_1 = require("./middleware");
const router = express_1.default.Router();
const userController = new userController_1.UserCtrl();
const authControler = new authControler_1.authController();
router.post("/auth/register", authControler.signUp);
router.post("/auth/login", authControler.login);
router.post("/auth/logout", authControler.logout);
router.get("/check", middleware_1.authenticateToken, (req, res) => {
    res.json({ authenticated: true, user: req.user });
});
router.post("/addUser", userController.addUser);
router.put("/user", userController.updateUser);
router.get("/getUserByUsername", userController.getOneByUsername);
router.get("/getAllUsers", userController.getAll);
router.delete("/deleteAll", userController.deleteAll);
router.delete("/user", userController.deleteUser);
exports.default = router;
//# sourceMappingURL=routes.js.map