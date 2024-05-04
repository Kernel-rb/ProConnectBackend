const { constants } = require('../constants');

const errorHandler = (req, res, next) => {
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    switch (statusCode) {
        case constants.VALIDATION_ERROR:
            res.json({
                title: "Validation Error",
                message: err.message,
                stackTrace: err.stack
            })
            break;
        case constants.UNAUTHORIZED:
            res.json({
                title: "Unauthorized",
                message: err.message,
                stackTrace: err.stack
            })
            break;
        case constants.FORBIDDEN:
            res.json({
                title: "Forbidden",
                message: err.message,
                stackTrace: err.stack
            })
            break;
        case constants.RESOURCE_NOT_FOUND:
            res.json({
                title: "Resource Not Found",
                message: err.message,
                stackTrace: err.stack
            })
            break;
        case constants.INTERNAL_SERVER_ERROR:
            res.json({
                title: "Internal Server Error",
                message: err.message,
                stackTrace: err.stack
            })
            break;
        default:
            if (err.message) {
                res.json({
                    title: "Error",
                    message: err.message,
                    stackTrace: err.stack
                })
            } else {
                console.log("All good");
            }
            break;
    }
};

module.exports = errorHandler;