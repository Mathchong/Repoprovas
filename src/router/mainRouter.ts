import { Router } from "express";
import usersRouter from "./usersRouter";
import testsRouter from './testsRouter'

const mainRouter = Router();

mainRouter.use(usersRouter)
mainRouter.use('/test', testsRouter);


export default mainRouter