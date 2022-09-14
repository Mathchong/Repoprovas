import Joi, { ObjectSchema } from "joi";

export const loginSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(10).required()
})