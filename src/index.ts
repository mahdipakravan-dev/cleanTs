import express, { Application } from "express"
import config from 'config'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import session from 'express-session'
import flash from 'express-flash'

import PrivateRoutes from './routes/privateRoutes'
import PublicRoutes from './routes/publicRoutes'

import EnvConfig from './configurations/env'
import MongoConfig from './configurations/mongo'
import MorganConfig from './configurations/morgan'
import ViewConfig from './configurations/view'
import Logger from "./helpers/logger"
import IpDetector from "./middlewares/ipDetector.md"
import ExceptionHandler from "./middlewares/ExceptionHandler.md"

/**
  * Repository Design Pattern                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
  * Single Responsibility Principle
*/

class App {

    app: Application = express()
    logger = Logger.getInstance()

    constructor() {
        new EnvConfig()
        new MongoConfig()
        new MorganConfig(this.app)
        new ViewConfig(this.app)
        this.configServer()
        this.configExpress()
        this.configRoutesAndLog()
        this.logger.info(`Server Started On ${process.env.HOST}:${process.env.PORT} [${process.env.NODE_ENV}]`)
    }

    private configServer(): void {
        this.app.listen(process.env.PORT)
    }

    private configExpress(): void {
        this.app.use(bodyParser.json(config.get('bodyParserConfig')))
        this.app.use(session({
            secret: config.get("session_secret"),
            saveUninitialized: true,
            resave : true ,
            cookie: { maxAge: 3600000 }
        }))
        this.app.use(cookieParser(config.get("cookie_secret")))
        this.app.use(flash())
    }

    private configRoutesAndLog(): void {
        this.app.use(IpDetector)
        this.app.use(PrivateRoutes)
        this.app.use(PublicRoutes)
        this.app.use(ExceptionHandler)
    }


}

new App()