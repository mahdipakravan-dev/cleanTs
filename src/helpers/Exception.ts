import Logger from "./logger";

class HttpException extends Error {
    constructor(public status: number, public error: any = "", public json: {} = {}) {
        super(error);
        error && Logger.getInstance().error(error)
    }
}

export default HttpException;