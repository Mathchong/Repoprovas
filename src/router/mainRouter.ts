import { Router } from "express";
import usersRouter from "./usersRouter";
import { validateJWT } from '../middlewares/tokenValidate'
import testsRouter from './testsRouter'

const mainRouter = Router();

mainRouter.use(usersRouter)
mainRouter.use(validateJWT());
mainRouter.use('/test', testsRouter);


export default mainRouter