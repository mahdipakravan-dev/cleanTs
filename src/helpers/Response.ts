import { Rest } from "./interfaces";
import { Response } from "express";

class HttpResponse {
    constructor(public res:Response , public rest:Rest) {
        res.status(rest.status).json(rest)
    }
}

export default HttpResponse;