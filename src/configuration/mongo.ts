import mongoose from 'mongoose'
import Logger from '../helpers/logger'

import config from 'config'

export default class ConnectMongo{
    constructor(){
        mongoose.connect( <string>process.env.MONGOHOST , config.get('mongoConfig') )
            .then(() => {
                Logger.getInstance("ConnectMongo").log({
                    level : "info" , 
                    message : "MongoDB Connected"
                })
            })
            .catch(err => {
                Logger.getInstance("ConnectMongo").log({
                    level : "error" , 
                    message : `Error in connect to mongodb ${err}`
                })
            })
    }
}