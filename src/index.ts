import express , {Application} from "express"
import config from 'config'

import PrivateRoutes from './routes/privateRoutes'

import EnvConfig from './configuration/env'
import MongoConfig from './configuration/mongo'
import MorganConfig from './configuration/morgan'
import Logger from "./helpers/logger"

/**
 * Repository Design Pattern
 * Single Responsibility Principle
 */

class App {

    app:Application = express()
    logger = Logger.getInstance("Index.ts")
 
    constructor(){
        console.log("App Started ON : " + process.env.NODE_ENV + " Mode")
        new EnvConfig()
        new MongoConfig()
        new MorganConfig(this.app)
        this.configServer()
        this.configExpress()
        this.configRoutesAndLog()
        this.logger.log({
            message : "Server Started" , 
            level : "info"
        })
    }

    private configServer() : void {
        this.app.listen(process.env.PORT)
    }

    private configExpress() : void{

    }

    private configRoutesAndLog() : void{
        this.app.use(PrivateRoutes)
    }

    
}

new App()