"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCtrl = void 0;
const userSchema_1 = require("../../models/userSchema");
const mongoose_1 = __importDefault(require("mongoose"));
const validators_1 = require("./validators");
const baseController_1 = require("../baseController");
class UserCtrl extends baseController_1.BaseController {
    constructor() {
        super(...arguments);
        this.createUser = async (req, res) => {
            console.log("API is working");
            try {
                const { error } = validators_1.userSchema.validate(req.body);
                if (error) {
                    return super.response(res, 400, false, error.message);
                }
                const { name, email, phone, password, data } = req.body;
                const userData = new userSchema_1.userModel({
                    name,
                    email,
                    phone,
                    password,
                    data
                });
                await userData.save();
                return super.response(res, 200, true, null, userData);
            }
            catch (err) {
                console.error(err);
                if (err.name === "ValidationError") {
                    return super.response(res, 400, false, 'Validation failed');
                }
                else {
                    return super.response(res, 500, true, 'Internal Server Error');
                }
            }
        };
        this.deleteAll = async (req, res) => {
            try {
                let allUsers = await userSchema_1.userModel.deleteMany({});
                if (allUsers.deletedCount === 0) {
                    return super.response(res, 400, false, 'User not found');
                }
                super.response(res, 200, true, 'user deleted successfully');
            }
            catch (err) {
                return super.response(res, 500, true, 'Internal Server Error');
            }
        };
        this.getAll = async (req, res) => {
            try {
                let allUser = await userSchema_1.userModel.find();
                res.json(allUser);
            }
            catch (err) {
                return super.response(res, 500, true, 'Internal Server Error');
            }
        };
        this.getOneByUsername = async (req, res) => {
            try {
                let { email } = req.body;
                let user = await userSchema_1.userModel.findOne({ email: email });
                if (!user) {
                    return super.response(res, 400, false, 'User not found');
                }
                res.json({ message: 'user found', user: user });
            }
            catch (err) {
                return super.response(res, 500, true, 'Internal Server Error');
            }
        };
        this.updateUser = async (req, res) => {
            try {
                let userId = req.query.user_id;
                if (!mongoose_1.default.Types.ObjectId.isValid(userId)) {
                    return super.response(res, 400, false, 'Invalid user ID');
                }
                const { name, email } = req.body;
                let user = await userSchema_1.userModel.findById({ _id: userId });
                if (!user) {
                    return super.response(res, 400, false, 'User not found');
                }
                if (!name && !email) {
                    return super.response(res, 400, false, 'Both name and email are required');
                }
                else {
                    user.name = name || user.name;
                    user.email = email || user.email;
                    let updatedUser = await user.save();
                    return super.response(res, 200, true, 'User Updated', { user: updatedUser });
                }
            }
            catch (err) {
                return super.response(res, 500, true, 'Internal Server Error');
            }
        };
        this.deleteUser = async (req, res) => {
            try {
                let userId = req.query.user_id;
                let user = await userSchema_1.userModel.deleteOne({ _id: userId });
                if (user.deletedCount === 0) {
                    return super.response(res, 400, false, 'User not found');
                }
                else {
                    return super.response(res, 200, true, 'delete user');
                }
            }
            catch (err) {
                return super.response(res, 500, true, 'Internal Server Error');
            }
        };
    }
}
exports.UserCtrl = UserCtrl;
//# sourceMappingURL=userController.js.map