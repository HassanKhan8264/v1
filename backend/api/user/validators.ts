import Joi from 'joi';

export const userSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    phone: Joi.number().integer().required(),
    password: Joi.string().min(8).required(),
    data: Joi.array().items(Joi.string()).optional()
});
