import {Router} from "express";
import routerOne from "./routerOne";

const mainRouter = Router();

mainRouter.use('/one', routerOne)

export default mainRouter