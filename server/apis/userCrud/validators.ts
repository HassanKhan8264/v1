import Joi from "joi";

export const userSchema = Joi.object({
  name: Joi.string().min(2).max(50).required().messages({
    "any.required": "Name is required.",
    "string.empty": "Name cannot be empty.",
    "string.min": "Name should be at least 2 characters long.",
    "string.max": "Name should not exceed 50 characters.",
  }),
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } }) // Basic email validation
    .min(5)
    .max(255)
    .required()
    .messages({
      "any.required": "Email is required.",
      "string.empty": "Email cannot be empty.",
      "string.email": "Invalid email format.",
    })
    .regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/) // Custom regex for email pattern
    .message("Email does not match the allowed pattern."),

  phone: Joi.number().integer().required().messages({
    "any.required": "Phone number is required.",
    "string.empty": "Phone number cannot be empty.",
    "string.pattern.base": "Phone number is invalid.",
  }),
  password: Joi.string()
    .pattern(new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[a-zA-Z\\d]{8,}$"))
    .required()
    .messages({
      "string.pattern.base": `Password must contain at least one lowercase letter, one uppercase letter, one digit, and be at least 8 characters long.`,
      "any.required": `A password is required.`,
    }),
  data: Joi.array().optional(),
});
