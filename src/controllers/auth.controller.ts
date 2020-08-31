import { Request, Response, NextFunction } from 'express'
import * as bcrypt from 'bcrypt'
import { UserModel } from '../models/User'
import config from 'config'

export default new class authController {
    public async signUp(req: Request, res: Response, next: NextFunction) {
        const {Password , userName} = req.body
        const hashedPassword = await bcrypt.hash(Password , config.get("passwordHash"))

        // console.log("Password Matching : ", doPasswordMatch)

        res.send("See CMD")
    }
}