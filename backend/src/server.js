import http from "http";
import dotenv from "dotenv"
import app from "./app.js"
import connectDB from "./config/db.js";

// configure dot env
dotenv.config({ path: ".env" })

// create http server
const server = http.createServer(app);

const PORT = process.env.PORT || 8000;

// start server function
const startServer = async () => {
    await connectDB()
    server.listen(PORT, () => {
        console.log(`Server running on ${PORT}`)
    });
};

// run the function
startServer();