import { Request, Response, NextFunction } from "express";

export default new class HomeController {

    public async getHome(req: Request, res: Response, next: NextFunction): Promise<void> {
        res.render('home')
    }

}