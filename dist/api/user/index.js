"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const userController_1 = require("./userController");
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const userController = new userController_1.UserCtrl();
router.post('/createUser', userController.createUser);
router.delete('/deleteAll', userController.deleteAll);
router.get('/getAllUsers', userController.getAll);
router.get('/getUserByUsername', userController.getOneByUsername);
router.put('/user', userController.updateUser);
router.delete('/user', userController.deleteUser);
exports.default = router;
//# sourceMappingURL=index.js.map