import { Request, Response, NextFunction } from "express";
import { CatModel } from "../models/Cat"

export default class HomeController {

    public async getHome(req: Request, res: Response, next: NextFunction): Promise<void> {
        const CarryCat = await CatModel
            .find()
            .exec()
            .catch(err => {
                // console.log("Error", err)
                return next(err)
            })
            .then(result => {
                if (result) return res.send("Ok")
                else return next("Undefined")
            })
    }

}