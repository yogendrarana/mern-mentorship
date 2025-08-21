import "dotenv/config";

import mongoose from "mongoose"

const DB_URI = process.env.DB_URI;

const connectDB = async () => {
    try {
        await mongoose.connect(DB_URI);
        console.log("MongoDB Connected Successfully!");
    } catch (err) {
        console.log("MongoDB Connection Error:", err.message);
    }
};

export default connectDB;