
const handleErrors = (err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || "An unexpected error occurred";

    console.error(`Error: ${message}, Status Code: ${statusCode}`);

    res.status(statusCode).json({
        status: "error",
        statusCode,
        message,
    });
};

module.exports = handleErrors;
