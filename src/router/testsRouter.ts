import { Router } from "express";

import schemaValidate from "../middlewares/schemaValidate";
import TestsController from "../controllers/testsController";
import { validateJWT } from '../middlewares/tokenValidate'
import { testSchema } from "../schemas/testSchema";

const tests = new TestsController();
const testsRouter = Router()

testsRouter.use(validateJWT())
testsRouter.post('/', schemaValidate(testSchema), tests.create)
testsRouter.get('/byDiscipline', tests.getByDiscipline)
testsRouter.get('/byTeacher', tests.getByTeacher)

export default testsRouter;