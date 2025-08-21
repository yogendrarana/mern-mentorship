import { Schema, model } from "mongoose";

const userSchema = new Schema({
    name: { type: String },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
}, {
    timestamps: true
})

// create user model
const User = model("User", userSchema);
export default User;