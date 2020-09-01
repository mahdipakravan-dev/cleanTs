import { Request, Response, NextFunction } from "express";
import { CatModel } from "../models/Cat"
import HttpException from "../helpers/Exception";
import * as bcrypt from "bcrypt"

export default class HomeController {

    // public async getHome(req: Request, res: Response, next: NextFunction): Promise<void> {
    //     await CatModel.find().exec()
    //         .catch(err => {
    //             next(new HttpException(500, "DatabaseError", [], err))
    //         })
    //         .then(result => {
    //             if (!result) return next(new HttpException(404, "DatabaseError"))
    //             return res.send(result)
    //         })
    // }

}