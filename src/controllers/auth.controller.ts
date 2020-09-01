import { Request, Response, NextFunction } from 'express'
import * as bcrypt from 'bcrypt'
import { UserModel } from '../models/User'
import config from 'config'
import HttpException from '../helpers/Exception'
import { statusCodes } from '../helpers/interfaces'
import HttpResponse from '../helpers/Response'
import Jwt from '../helpers/jwt'


export default new class authController {

    public async signUp(req: Request, res: Response, next: NextFunction) {
        const { username } = req.body
        if(await UserModel.findOne({username})) return next(new HttpException(statusCodes.CONFLICT , "username Already Taken"))
        const password = await bcrypt.hash(req.body.password, config.get("passwordHash"))

        new UserModel({
            username,
            password
        }).save()
            .then((result) => {
                const token = Jwt.getToken({userId : result._id}) 
                new HttpResponse(res , 
                    {message: "User Successfully created", status: statusCodes.CREATED , data: { token } })
            })
            .catch(err => { next(new HttpException(statusCodes.INTERNAL, "Database Error", [], err)) })
    }
    
}