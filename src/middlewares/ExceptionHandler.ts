import { Request, Response, NextFunction } from "express";

export default function ExceptionHandler(err: Error, req: Request, res: Response, next: NextFunction) {
    console.log("Error in Middleware")
    res.json({ error: "Er" })
    console.log("Res Send From Middleware")
}