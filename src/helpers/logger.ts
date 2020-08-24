import winston from 'winston'

/**
 * Singleton
 */

export default class Logger {
    static logger : winston.Logger ;
    constructor(){}

    static getInstance(Instance : string){
        if(!Logger.logger){
            this.logger = winston.createLogger({
                level: 'info',
                format: winston.format.json(),
                defaultMeta: { service: Instance },
                transports: [
                  new winston.transports.Console({format: winston.format.simple()}),
                  new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
                  new winston.transports.File({ filename: 'logs/combined.log' }),
                ],
            });
        }

        return Logger.logger
    }
}