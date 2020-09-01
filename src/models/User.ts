import mongoose, { Schema, Document } from 'mongoose'
import { NextFunction } from 'express'

import * as bcrypt from 'bcrypt'
import config from "config"

export interface userInterface {
    username: string,
    password: string,
    _id?:string
}
export interface IUser extends Document {
    username: string,
    password: string ,

    CreateUser(user:userInterface):Promise<any>
}

const UserSchema: Schema = new Schema({
    username: String,
    password: String
})

UserSchema.methods.CreateUser = function(user:userInterface){
    return new Promise((resolve , reject) => {
        new UserModel({username : user.username , password : user.password}).save()
        .then(result => {
            resolve(result)
        })
        .catch(err => {
            reject(err)
        })
    })
}

export const UserModel = mongoose.model<IUser>('username', UserSchema)