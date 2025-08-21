class CustomError extends Error {
    constructor(status, message) {
        super(message);
        this.status = status || 500;

        // Maintains proper stack trace for where error was thrown
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, this.constructor);
        }
    }
}

export default CustomError;
