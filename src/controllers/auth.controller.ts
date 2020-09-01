import { Request, Response, NextFunction } from 'express'
import * as bcrypt from 'bcrypt'
import { UserModel, userInterface } from '../models/User'
import config from 'config'
import HttpException from '../helpers/Exception'
import { statusCodes } from '../helpers/interfaces'
import HttpResponse from '../helpers/Response'
import Jwt from '../helpers/jwt'
import Bcrypt from '../helpers/bcrypt'

import messages from '../helpers/messages'


export default new class authController {

    public async signUp(req: Request, res: Response, next: NextFunction) {
        const { username, password } = req.body

        if (await UserModel.findOne({ username })) {return next(new HttpException(statusCodes.CONFLICT, messages.alreadyTaken))}
        const hashedPass = await Bcrypt.Hash(password)

        await new UserModel()
            .CreateUser({ username, password: hashedPass })
            .then(result => {
                const token = Jwt.getToken({ userId: result._id })
                new HttpResponse(res,
                    { message: messages.success, status: statusCodes.CREATED, data: { token } })
            })
            .catch(err => {
                next(new HttpException(statusCodes.INTERNAL, messages.internal, [], err))
            })
    }

    public async signIn(req: Request, res: Response, next: NextFunction) {
        const { username, password } = req.body
        let user = await UserModel.findOne({ username });
        if (!user) return next(new HttpException(statusCodes.NOT_FOUND, "Username or password inCorrect"))
        bcrypt.compare(password, user.password)
            .then(result => {
                result
                    ? new HttpResponse(res, { message: "Logged in", status: statusCodes.SUCCESS, data: { token: "" } })
                    : next(new HttpException(statusCodes.NOT_ACCEPTABLE, "Username or password inCorrect"))

            })
            .catch(() => {
                next(new HttpException(statusCodes.INTERNAL, "Something Wrong Try Again Later"))
            })
    }

}