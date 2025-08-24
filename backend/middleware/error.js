export const notFound = async(req, res, next) => next({status: 404, message: "Route not Found"})

export const errorHandler = (error,req, res, next) => {
    const status = error.status || 500;
    res.status(status).json({message: error.message || "server error"});
} 