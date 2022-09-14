import { Router } from "express";

import schemaValidate from "../middlewares/schemaValidate";
import { loginSchema } from "../schemas/loginSchema";
import { registerSchema } from "../schemas/registerSchema";
import UsersController from '../controllers/usersControllers'
const users = new UsersController()

const usersRouter = Router()

usersRouter.post('/signin', schemaValidate(registerSchema), users.create)
usersRouter.post('/login', schemaValidate(loginSchema), users.login)

export default usersRouter;