import { Response } from "express";
import config from 'config'
import { Rest, statusCodes } from "./interfaces";

export class ExceptionHandler {
    static response: Rest

    public static View(res: Response, error: string) {
        res.render(config.get("ExceptionPage") , {error})
    }

    public static Api(res: Response, msg: string) {
        ExceptionHandler.response = {
            message: config.get(msg || "persianMessages.NotFound"),
            status: statusCodes.NOT_FOUND,
            data: []
        }
        res.json(ExceptionHandler.response)
    }

    public static Throw(msg:string) {
        throw new Error(config.get(msg))
    }
}

