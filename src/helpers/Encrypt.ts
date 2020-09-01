import * as jwt from 'jsonwebtoken'
import { Token } from './interfaces'
import config from 'config'
import * as bcrypt from 'bcrypt'

export default class Encrypt {

    static async Hash(password : string){
        return await bcrypt.hash(password, config.get("passwordHash"))
    }

    static async Compare(password : string , hashedPassword : string):Promise<boolean>{
        return new Promise((resolve , reject) => {
            bcrypt.compare(password, hashedPassword)
            .then((result) => {resolve(result)})
            .catch((err) => {reject(err)})
        })
    }
}