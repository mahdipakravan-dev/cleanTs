import {Request , Response , NextFunction} from 'express'
import RequestIp from 'request-ip'
export default function IpDetector(req:Request,res:Response,next:NextFunction){
    console.log(RequestIp.getClientIp(req))
    next()
}