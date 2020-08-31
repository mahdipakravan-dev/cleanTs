import express, { Application } from "express"
import config from 'config'
import bodyParser from 'body-parser'

import PrivateRoutes from './routes/privateRoutes'
import PublicRoutes from './routes/publicRoutes'

import EnvConfig from './configurations/env'
import MongoConfig from './configurations/mongo'
import MorganConfig from './configurations/morgan'
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
    }

    private configRoutesAndLog(): void {
        this.app.use(IpDetector)
        this.app.use(PrivateRoutes)
        this.app.use(PublicRoutes)
        this.app.use(ExceptionHandler)
    }


}

new App()