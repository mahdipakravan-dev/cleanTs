import { Request, Response } from "express";

export default new class HomeController{

    public getHome(req:Request , res:Response):void{
        res.json(req.body)
    }
}