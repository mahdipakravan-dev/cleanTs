import {CatModel as Cat} from '../models/Cat'
import {InternalException} from '../helpers/Exception'

export default class Util{
    private whole : any = {};
    constructor(){
        Object.assign(this.whole , {
            Cat
        })
    }

    public async get(collection:string , query : {} = {}){
        try {
            return await this.whole[collection].find(query)
        } catch (error) {
            InternalException.Throw(error)
        }
    }

    public async getOne(collection:string , query : {} = {}){
        try {
            return await this.whole[collection].findOne(query)
        } catch (error) {
            InternalException.Throw(error)
        }
    }

    public async new(collection:string , data : {}){
        try {
            return await new this.whole[collection](data).save()
        } catch (error) {
            InternalException.Throw(error)
        }
    }

}