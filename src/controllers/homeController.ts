import { Request, Response } from "express";
import Utility from '../models/Util'

export default new class HomeController{
    private readonly Util : Utility

    constructor(){
        this.Util = new Utility()
        this.getHome.bind(this)
    }

    public async getHome(req:Request , res:Response):Promise<void>{
        const x = await this.Util.get("CatModel")
        console.log(x)
        res.json(req.body)
    }
}