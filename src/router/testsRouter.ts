import { Router } from "express";

import schemaValidate from "../middlewares/schemaValidate";
import TestsController from "../controllers/testsController";
import { testSchema } from "../schemas/testSchema";

const tests = new TestsController();
const testsRouter = Router()

testsRouter.post('/', schemaValidate(testSchema), tests.create)
testsRouter.get('/byDiscipline', tests.getByDiscipline)
testsRouter.get('/byTeacher',)

export default testsRouter;