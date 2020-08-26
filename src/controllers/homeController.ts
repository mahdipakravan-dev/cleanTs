import { Request, Response } from "express";
import Utility from '../helpers/Util'

export default class HomeController{
    
    constructor(private readonly Util : Utility = new Utility()){}

    public async getHome(req:Request , res:Response):Promise<void>{
        const CarryCat = await this.Util.get("Cat")
        res.json(req.body)
    }

}