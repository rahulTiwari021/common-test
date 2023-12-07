export abstract class CustomError extends Error {
    abstract statusCode: number;

    constructor(errMsg: string) {
        super(errMsg);

        Object.setPrototypeOf(this, CustomError.prototype);
    }

    abstract serializeErrors(): { message: string; field?: string }[] 
}