import { Response } from "express";

class HttpResponse {
    constructor(public res:Response , public status:number , public rest : any) {
        res.status(status).json(rest)
    }
}

export default HttpResponse;