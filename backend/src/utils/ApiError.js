class ApiError extends Error {
    constructor(statusCode, message, errors=[]) {
        super(message);

        this.success = false;
        this.statusCode = statusCode;
        this.error = errors;
    }
}

export default ApiError;