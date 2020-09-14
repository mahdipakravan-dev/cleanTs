import { Request, Response, NextFunction } from "express";
import HttpException from "../helpers/Exception";
import Jwt from '../helpers/jwt'
import { statusCodes, Token, IToken } from "../helpers/interfaces";

export default function AuthHandler(req: Request, res: Response, next: NextFunction): void {
    let token = Jwt.authenticator(req.header("token")?.toString() || "")
    if (!token || !token.userData) return next(new HttpException(statusCodes.VALIDATION_ERROR , "" , {err : "authorization error"}))
    req.auth = token.userData
    next()
}