import { CustomError } from "./custom-error";

export class BadRequestError extends CustomError {
    statusCode = 400;

    constructor(public errMsg: string) {
        super(errMsg);

        Object.setPrototypeOf(this, BadRequestError.prototype);
    }

    serializeErrors(): { message: string; field?: string | undefined; }[] {
        return [
            { message: this.errMsg }
        ];
    }
}