import mongoose , {Schema , Document} from 'mongoose'

export interface ICat extends Document{
    name :string
}

const CatSchema:Schema = new Schema({
    name : {type : String}
})

export const CatModel = mongoose.model<ICat>('cat' , CatSchema)
