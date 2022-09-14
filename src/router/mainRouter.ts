import {Router} from "express";
import usersRouter from "./usersRouter";

const mainRouter = Router();

mainRouter.use(usersRouter)

export default mainRouter