import * as jwt from 'jsonwebtoken'
import { Token, IToken } from './interfaces'
import config from 'config'

export default class Jwt {
    static getToken(payload: Token): string {
        return jwt.sign({
            userData: payload
        }, config.get('jwtSign'), { expiresIn: 5 })
    }

    static authenticator(token: string): IToken {
        return jwt.decode(token, config.get('jwtSign')) as IToken
    }
}