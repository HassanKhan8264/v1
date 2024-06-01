"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticateToken = exports.testCookie = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = __importDefault(require("./config"));
function testCookie(req, res, next) {
    try {
        if (!req?.cookies?.Token) {
            res.status(401).send({
                message: "include http-only credentials with every request",
            });
            return;
        }
        jsonwebtoken_1.default.verify(req.cookies.Token, config_1.default.Jwt_Secret, function (err, decodedData) {
            let nowDate = new Date().getTime() / 1000;
            if (decodedData.exp < nowDate) {
                res.cookie("Token", "", {
                    maxAge: 1,
                    httpOnly: true,
                });
                res.send({ message: "token expired" });
            }
            else {
                req.body.token = decodedData;
                next();
            }
        });
    }
    catch (err) {
        res.status(401).send("invalid token");
    }
}
exports.testCookie = testCookie;
function authenticateToken(req, res, next) {
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(" ")[1];
    if (token == null)
        return res.sendStatus(401);
    jsonwebtoken_1.default.verify(token, config_1.default.Jwt_Secret, (err, decodedData) => {
        if (err)
            return res.sendStatus(401);
        req.body.token = decodedData;
        next();
    });
}
exports.authenticateToken = authenticateToken;
//# sourceMappingURL=middleware.js.map