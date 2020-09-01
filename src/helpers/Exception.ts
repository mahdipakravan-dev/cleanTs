import Logger from "./logger";

class HttpException extends Error {
    constructor(public status: number , public error: any = "") {
        super(error);
        error && Logger.getInstance().error(error)
    }
}

export default HttpException;