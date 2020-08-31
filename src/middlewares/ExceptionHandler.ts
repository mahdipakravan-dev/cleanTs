import { Request, Response, NextFunction } from "express";

export default function ExceptionHandler(err: Error, req: Request, res: Response, next: NextFunction) {
    res.json({ error: err.name, message: err.message }).status(500)
}