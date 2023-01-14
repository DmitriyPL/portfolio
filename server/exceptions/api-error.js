export class ApiError extends Error {
    status;
    errors;

    constructor(status, messages, errors = []){
        super(messages);
        this.status = status;
        this.errors = errors;
    }

    static UserNotFound() {
        return new ApiError(401, 'User not found');
    }

    static BadRequest(messages, errors = []) {
        return new ApiError(400, messages, errors);
    }

    static DataBaseError(messages, errors = []) {
        return new ApiError(500, messages, errors);
    }
}