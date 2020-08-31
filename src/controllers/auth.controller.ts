import { Request, Response, NextFunction } from 'express'
import * as bcrypt from 'bcrypt'
import { UserModel } from '../models/User'
import config from 'config'
import HttpException from '../helpers/Exception'
import { Rest, statusCodes } from '../helpers/interfaces'

export default new class authController {

    public async signUp(req: Request, res: Response, next: NextFunction) {
        let { username } = req.body
        const password = await bcrypt.hash(req.body.password, config.get("passwordHash"))

        new UserModel({
            username,
            password
        }).save()
            .then(() => {
                const Result: Rest = { message: "Success", status: statusCodes.CREATED , data: { token: "" } }
                res.status(statusCodes.CREATED).json(Result)
            })
            .catch(err => { next(new HttpException(statusCodes.INTERNAL, "Database Error", [], err)) })
    }
    
}