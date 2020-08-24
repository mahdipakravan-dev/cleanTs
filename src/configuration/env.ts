import * as dotenv from 'dotenv'

export default class ConfigEnv{
    constructor(){
        dotenv.config()
        switch(process.env.NODE_ENV){
            case "test":
                dotenv.config({ path : `.env.test` }); break;
            case "production":
                dotenv.config({ path : `.env.production` }); brweak;
            default :
                dotenv.config({ path : `.env.development` }); break;
        }
    }
}