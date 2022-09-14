import { Router } from "express";

import schemaValidate from "../middlewares/schemaValidate";
import { loginSchema } from "../schemas/loginSchema";
import { registerSchema } from "../schemas/registerSchema";
import UsersController from '../controllers/usersControllers'
const users = new UsersController()

const testsRouter = Router()

testsRouter.post('/', schemaValidate(registerSchema), users.create)
testsRouter.get('/byDiscipline', )
testsRouter.get('/byTeacher', )

export default testsRouter;