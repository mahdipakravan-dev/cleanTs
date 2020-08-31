import mongoose, { Schema, Document } from 'mongoose'
import { NextFunction } from 'express'

import * as bcrypt from 'bcrypt'
import config from "config"

interface IUser extends Document {
    username: string,
    password: string
}

const UserSchema: Schema = new Schema({
    username: String,
    password: String
})

UserSchema.methods.comparePass = async function (password: string, hash: string): Promise<boolean> {
    return await bcrypt.compare(password, hash)
}

UserSchema.statics.HashPass = async function HashPass(pass: string) {
    return await bcrypt.hash(pass, config.get("passwordHash"))
}

export const UserModel = mongoose.model<IUser>('username', UserSchema)