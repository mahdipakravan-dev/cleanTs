import mongoose, { Schema, Document } from 'mongoose'

interface IUser extends Document {
    username: string,
    password: string
}

const UserSchema: Schema = new Schema({
    username: String,
    password: String
})

export const UserModel = mongoose.model<IUser>('username', UserSchema)

