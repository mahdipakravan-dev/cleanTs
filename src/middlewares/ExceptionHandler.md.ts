import { Request, Response, NextFunction } from "express";
import HttpException from "../helpers/Exception";

export default function ExceptionHandler(err: HttpException, req: Request, res: Response, next: NextFunction) {
    res.json({ error: err.name, message: err.message, data: err.data }).status(err.status)
}