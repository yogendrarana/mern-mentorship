import express from "express"
import userRouter from "./router/user-router.js";
import errorMiddleware from "./middlewares/error-middleware.js";

const app = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// use routes
app.use("/api", userRouter)

// error handling middleware
app.use(errorMiddleware);

// export express app
export default app;