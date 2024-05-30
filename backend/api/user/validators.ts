import Joi from 'joi';

export const userSchema = Joi.object({
    name: Joi.string().alphanum().min(2).max(30).required().messages({
        'string.empty': `A name is required.`,
        'any.only': `Invalid name.`,
    }),
    email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
       .required()
       .messages({
            'string.email': `Invalid email format.`,
            'any.required': `An email is required.`,
        }),
    phone: Joi.number().integer().min(1000000000).max(9999999999).required().messages({
        'number.base': `Phone number must be a number.`,
        'number.integer': `Phone number must be an integer.`,
        'any.required': `A phone number is required.`,
    }),
    password: Joi.string().pattern(new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[a-zA-Z\\d]{8,}$'))
       .required()
       .messages({
            'string.pattern.base': `Password must contain at least one lowercase letter, one uppercase letter, one digit, and be at least 8 characters long.`,
            'any.required': `A password is required.`,
        }),
    data: Joi.array().optional()
});
