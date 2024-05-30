"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userSchema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.userSchema = joi_1.default.object({
    name: joi_1.default.string().alphanum().min(2).max(30).required().messages({
        'string.empty': `A name is required.`,
        'any.only': `Invalid name.`,
    }),
    email: joi_1.default.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
        .required()
        .messages({
        'string.email': `Invalid email format.`,
        'any.required': `An email is required.`,
    }),
    phone: joi_1.default.number().integer().min(1000000000).max(9999999999).required().messages({
        'number.base': `Phone number must be a number.`,
        'number.integer': `Phone number must be an integer.`,
        'any.required': `A phone number is required.`,
    }),
    password: joi_1.default.string().pattern(new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[a-zA-Z\\d]{8,}$'))
        .required()
        .messages({
        'string.pattern.base': `Password must contain at least one lowercase letter, one uppercase letter, one digit, and be at least 8 characters long.`,
        'any.required': `A password is required.`,
    }),
    data: joi_1.default.array().optional()
});
//# sourceMappingURL=validators.js.map