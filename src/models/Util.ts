import {CatModel} from './Cat'
import {InternalException} from '../helpers/Exception'

export default class Util{
    private whole : any = {};
    constructor(){
        Object.assign(this.whole , {
            CatModel
        })
    }

    public async get(collection:string , query : {} = {}){
        try {
            return await this.whole[collection].find(query)
        } catch (error) {
            InternalException.Throw()
        }
    }

    public async getOne(collection:string , query : {} = {}){
        try {
            return await this.whole[collection].findOne(query)
        } catch (error) {
            InternalException.Throw()
        }
    }

}