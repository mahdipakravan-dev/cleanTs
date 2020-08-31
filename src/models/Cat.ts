import mongoose, { Schema, Document } from 'mongoose'

export interface ICat extends Document {
    name: string
}

const CatSchema: Schema = new Schema({
    name: { type: String }
})

CatSchema.pre("find", function (next) {
    throw new Error("Test")
})
export const CatModel = mongoose.model<ICat>('cat', CatSchema)

