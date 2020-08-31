import { plainToClass } from 'class-transformer';
import { validate, ValidationError } from 'class-validator';
import * as express from 'express';
import { Rest } from '../helpers/interfaces';
import HttpException from '../helpers/Exception';

function validationMiddleware<T>(type: any): express.RequestHandler {
    return (req, res, next) => {
        validate(plainToClass(type, req.body))
            .then((errors: ValidationError[]) => {
                if (errors.length > 0) {
                    let messages: any[] = []
                    errors.forEach((error: ValidationError) => {
                        messages.push(Object.values(error.constraints || "")[0])
                    })
                    next(new HttpException(400, "Validation Failed", messages))
                } else {
                    next();
                }
            });
    };
}

export default validationMiddleware;