import Logger from "./logger";

class HttpException extends Error {
    constructor(public status: number, public message: string, public data: any[] = [], public error: any = "") {
        super(message);
        error && Logger.getInstance().error(error)
    }
}

export default HttpException;