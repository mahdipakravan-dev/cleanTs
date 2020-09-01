import { Request, Response, NextFunction } from 'express'
import * as bcrypt from 'bcrypt'
import { UserModel, userInterface, IUser } from '../models/User'
import config from 'config'
import HttpException from '../helpers/Exception'
import { statusCodes } from '../helpers/interfaces'
import HttpResponse from '../helpers/Response'
import Jwt from '../helpers/jwt'
import Encrypt from '../helpers/Encrypt'

import messages from '../helpers/messages'


export default new class authController {

    public async signUp(req: Request, res: Response, next: NextFunction) {
        const { username, password } = req.body

        if (await UserModel.findOne({ username })) {return next(new HttpException(statusCodes.CONFLICT))}
        const hashedPass = await Encrypt.Hash(password)

        await new UserModel()
            .CreateUser({ username, password: hashedPass })
            .then(result => {
                new HttpResponse(res, statusCodes.SUCCESS , { token : Jwt.getToken({ userId: result._id }) })
            })
            .catch(err => {
                next(new HttpException(statusCodes.INTERNAL , err))
            })
    }

    public async signIn(req: Request, res: Response, next: NextFunction) {
        const { username, password } = req.body
        await UserModel.findOne({ username })
            .then(user => {
                if(!user) return next(new HttpException(statusCodes.NOT_FOUND))
                Encrypt.Compare(password , user.password)
                .then((result) => {
                    result 
                        ? new HttpResponse(res , statusCodes.SUCCESS , { token: Jwt.getToken({userId : user?._id})})
                        : next(new HttpException(statusCodes.NOT_FOUND))
                })
                .catch((err) => {
                    next(new HttpException(statusCodes.INTERNAL , err))
                })
            })
            .catch(err => {
                next(new HttpException(statusCodes.NOT_FOUND))
            })
    }

}