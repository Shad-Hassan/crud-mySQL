
class ErrorHandler extends Error {
    constructor(statusCode, message) {
      super(message);
      this.statusCode = statusCode;
      this.message = message;
    }
  
    static badRequest(message = "Bad Request") {
      return new ErrorHandler(400, message);
    }
  
    static unauthorized(message = "Unauthorized") {
      return new ErrorHandler(401, message);
    }
  
    static forbidden(message = "Forbidden") {
      return new ErrorHandler(403, message);
    }
  
    static notFound(message = "Not Found") {
      return new ErrorHandler(404, message);
    }
  
    static internalServerError(message = "Internal Server Error") {
      return new ErrorHandler(500, message);
    }
  }
  
  module.exports = ErrorHandler;
  