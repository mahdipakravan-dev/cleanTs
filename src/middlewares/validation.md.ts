import { plainToClass } from 'class-transformer';
import { validate, ValidationError } from 'class-validator';
import * as express from 'express';
import { Rest } from '../helpers/interfaces';

function validationMiddleware<T>(type: any): express.RequestHandler {
    return (req, res, next) => {
        validate(plainToClass(type, req.body))
            .then((errors: ValidationError[]) => {
                if (errors.length > 0) {
                    let messages: any[] = []
                    errors.forEach((error: ValidationError) => {
                        messages.push(Object.values(error.constraints || ""))
                    })
                    const Result: Rest = {
                        status: 400,
                        data: messages,
                        message: "Validation Failed"
                    }
                    res.status(400).json(Result)
                } else {
                    next();
                }
            });
    };
}

export default validationMiddleware;