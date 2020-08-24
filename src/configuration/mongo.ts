import mongoose from 'mongoose'

export default class ConnectMongo{
    constructor(){
        mongoose.connect( 'mongodb://localhost:27017/funWithDocker' ,  {useNewUrlParser: true, useUnifiedTopology: true})
            .then(result => {
                console.log(`Mongodb Connected Success`)
            })
            .catch(err => {
                console.log(`Error in Connect Mongodb` , err)
            })
    }
}