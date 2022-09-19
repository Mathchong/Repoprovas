import Joi, { ObjectSchema } from "joi";

export const registerSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(10).required(),
    password_confirmation: Joi.string().required()
})