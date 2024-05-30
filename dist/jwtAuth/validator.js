"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userSchema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.userSchema = joi_1.default.object({
    name: joi_1.default.string().min(2).max(50).required().messages({
        "any.required": "Name is required.",
        "string.empty": "Name cannot be empty.",
        "string.min": "Name should be at least 2 characters long.",
        "string.max": "Name should not exceed 50 characters."
    }),
    email: joi_1.default.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
        .min(5)
        .max(255)
        .required()
        .messages({
        "any.required": "Email is required.",
        "string.empty": "Email cannot be empty.",
        "string.email": "Invalid email format."
    })
        .regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)
        .message("Email does not match the allowed pattern."),
    phone: joi_1.default.number().integer().required().messages({
        "any.required": "Phone number is required.",
        "string.empty": "Phone number cannot be empty.",
        "string.pattern.base": "Phone number is invalid."
    }),
    password: joi_1.default.string().pattern(new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[a-zA-Z\\d]{8,}$'))
        .required()
        .messages({
        'string.pattern.base': `Password must contain at least one lowercase letter, one uppercase letter, one digit, and be at least 8 characters long.`,
        'any.required': `A password is required.`,
    }),
});
//# sourceMappingURL=validator.js.map