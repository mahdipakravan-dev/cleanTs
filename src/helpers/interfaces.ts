export enum statusCodes {
    VALIDATION_ERROR = 403,
    NOT_FOUND = 404,
    CONFLICT = 409,
    FORBIDDEN = 403,
    NOT_ACCEPTABLE = 406,
    INTERNAL = 500,
    SERVICE_UNAVAILABLE = 503,
    NOT_IMPLEMENTED = 501,
    GATEWAY_TIMEOUT = 504,
    SUCCESS = 200,
    CREATED = 201,
    NON_AUTHORITATIVE = 206,
    NO_CONTENT = 204,
    ACCEPTED = 202,
    ALREADY_REPORTED = 208,
    IM_USED = 226
}

export interface Token {
    userId: string
}

export interface IToken {
    iat: number,
    exp: number,
    userData: { userId: string }
}