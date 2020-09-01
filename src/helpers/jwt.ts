import * as jwt from 'jsonwebtoken'
import { Token } from './interfaces'
import config from 'config'

export default class Jwt {
    static getToken(payload : Token):string{
        return jwt.sign(payload , config.get('jwtSign'))
    }
}