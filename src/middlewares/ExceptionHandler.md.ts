import { Request, Response, NextFunction } from "express";
import HttpException from "../helpers/Exception";
import { statusCodes } from "../helpers/interfaces";

export default function ExceptionHandler(err: HttpException, req: Request, res: Response, next: NextFunction) {
    if (!err.status) return res.status(statusCodes.INTERNAL).json({ "Internal": "Internal Not Handled Error" })
    res.status(err.status).json(err.json)
}