import {Application} from 'express'
import morgan from 'morgan'
import fs from 'fs'

export default class ConfigMorgan{
    constructor(app:Application){
        // console.log(config.get('test'))
        app.use(morgan('short' , {stream : fs.createWriteStream('logs/route.log', { flags: 'a' })}))
    }
}