import * as express from "express"

declare global {
    namespace Express {
        interface Request {
            token: string
            auth: { userId: string }
        }
    }
}