"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authController = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const userAccountScehma_1 = require("../models/userAccountScehma");
const validator_1 = require("./validator");
const baseController_1 = require("../baseController");
const config_1 = __importDefault(require("../config"));
class authController extends baseController_1.BaseController {
    constructor() {
        super(...arguments);
        this.signUp = async (req, res) => {
            try {
                let { name, email, password, phone } = req.body;
                const { error } = validator_1.userSchema.validate(req.body);
                if (error) {
                    return super.response(res, 400, false, error.message);
                }
                const existingUser = await userAccountScehma_1.userModel.findOne({ email: email }).exec();
                if (existingUser) {
                    return super.response(res, 400, false, "User already exists");
                }
                const hashedPassword = await new Promise((resolve, reject) => {
                    bcrypt_1.default.hash(password, 10, (err, hash) => {
                        if (err) {
                            reject(err);
                        }
                        else {
                            resolve(hash);
                        }
                    });
                });
                const newUser = await userAccountScehma_1.userModel.create({
                    name: name,
                    email: email,
                    phone: phone,
                    password: hashedPassword,
                });
                console.log("data saved: ", newUser);
                return super.response(res, 200, true);
            }
            catch (error) {
                console.error(error);
                return super.response(res, 500, false, "Internal Server Error");
            }
        };
        this.login = async (req, res) => {
            try {
                let { email, password } = req.body;
                if (!email || !password) {
                    return super.response(res, 400, false, "Fields Missing");
                }
                const user = await userAccountScehma_1.userModel.findOne({ email: email }).exec();
                if (user && (await bcrypt_1.default.compare(password, user.password))) {
                    const token = jsonwebtoken_1.default.sign({
                        _id: user._id,
                        email: user.email,
                        exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24,
                    }, config_1.default.Jwt_Secret);
                    res.cookie("Token", token, {
                        maxAge: 86_400_000,
                        httpOnly: true,
                    });
                    return super.response(res, 200, true, "login success", {
                        profile: {
                            _id: user._id,
                            name: user.name,
                            email: user.email,
                        },
                    });
                }
                else {
                    return super.response(res, 401, false, "Invalid credentials");
                }
            }
            catch (error) {
                console.error(error);
                return super.response(res, 500, false, "Internal Server Error");
            }
        };
        this.logout = async (req, res) => {
            req.cookie("Token", "", {
                maxAge: 1,
                httpOnly: true,
            });
            return super.response(res, 200, true, "Logout successful");
        };
    }
}
exports.authController = authController;
//# sourceMappingURL=authControler.js.map