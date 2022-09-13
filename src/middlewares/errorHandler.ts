import { Request, Response, NextFunction } from "express"

export default function errorHandler(
    error: { status: number, message: string },
    req: Request,
    res: Response,
    next: NextFunction) {
        return res.status(error.status).json({status: error.status, message: error.message})
}