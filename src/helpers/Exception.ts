import { Response } from "express";
import config from 'config'
import { Rest , statusCodes } from "./interfaces";

export class NotFoundException{
    static response : Rest
    
    public static View(res:Response){
        res.redirect(config.get("notFoundExceptionPage"))
    }

    public static Api(res:Response){
        NotFoundException.response = {
            message : config.get("persianMessages.NotFound") ,
            status : statusCodes.NOT_FOUND ,
            data : []
        }
        res.json(NotFoundException.response)
    }
    
    public static Throw(){
        throw new Error(config.get("persianMessages.NotFound"))
    }
}

export class InternalException{
    static response : Rest
    
    public static View(res:Response){
        res.redirect(config.get("internalExceptionPage"))
    }

    public static Api(res:Response){
        NotFoundException.response = {
            message : config.get("persianMessages.Internal") ,
            status : statusCodes.INTERNAL ,
            data : []
        }
        res.json(InternalException.response)
    }
    
    public static Throw(err : any){
        throw new Error(err)
    }
}