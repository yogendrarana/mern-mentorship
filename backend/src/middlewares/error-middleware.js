const errorMiddleware = (err, req, res, next) => {

    err.status = err.status || 500;
	err.message = err.message || "Internal Server Error";

    if (err.code === 11000) {
        err.status = 400;
        err.message = "Duplicate field value entered";
    }

    res.status(err.status).json({
        success: false,
        message: err.message
    });
}

export default errorMiddleware;