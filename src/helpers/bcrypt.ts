import * as jwt from 'jsonwebtoken'
import { Token } from './interfaces'
import config from 'config'
import * as bcrypt from 'bcrypt'

export default class Bcrypt {
    static async Hash(password : string){
        return await bcrypt.hash(password, config.get("passwordHash"))
    }
}