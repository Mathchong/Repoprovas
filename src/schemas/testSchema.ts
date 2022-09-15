import Joi, { ObjectSchema } from "joi";
import { testsCreation } from "../types/tests";

export const testSchema: ObjectSchema<testsCreation> = Joi.object({
    name: Joi.string().required(),
    pdfUrl: Joi.string().required(),
    categoryId: Joi.number().min(1).required(),
    teacherDisciplineId: Joi.number().min(1).required()
})