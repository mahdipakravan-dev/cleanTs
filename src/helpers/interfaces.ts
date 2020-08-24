export interface Rest{
    status : number
    data : [] | {}
    message : string
}

export enum statusCodes {
    NOT_FOUND=404 ,
    INTERNAL=500
}