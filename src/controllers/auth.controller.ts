import { Request, Response, NextFunction } from 'express'
import * as bcrypt from 'bcrypt'

export default new class authController {
    public async signUp(req: Request, res: Response, next: NextFunction) {
        const password = "1234567"
        const hashedPassword = await bcrypt.hash(password, 10)
        const doPasswordMatch = await bcrypt.compare(password, hashedPassword)

        console.log("Password Matching : ", doPasswordMatch)

        res.send("See CMD")
    }
}