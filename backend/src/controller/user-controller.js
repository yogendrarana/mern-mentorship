import User from "../models/user-model.js"
import CustomError from "../utils/custom-error.js";

export const postUser = async (req, res, next) => {
    try {
        const { name, email, password } = req.body;

        // Validate required fields
        if (!email || !password) {
            throw new CustomError(400, "Email and password are required");
        }

        // Create user
        const user = await User.create({ name, email, password });

        // Respond without exposing password
        res.status(201).json({
            success: true,
            message: "User created successfully",
            data: user
        });

    } catch (error) {
        next(error)
    }
};


export const getUser = async (req, res, next) => {
    const { id } = req.query;

    try {
        const user = await User.findById(id).select("-password");

        if (!user) {
            throw new CustomError(400, "User not found");
        }

        res.status(200).json({
            success: true,
            message: "User fetched successfully",
            data: user
        });
    } catch (error) {
        next(error);
    }
};


export const patchUser = async (req, res, next) => {
    const { id } = req.query;
    const { name } = req.body;

    try {
        const user = await User.findByIdAndUpdate(
            id,
            { name },
            { new: true, runValidators: true }
        ).select("-password");

        if (!user) {
            throw new CustomError(404, "User not found");
        }

        res.status(200).json({
            success: true,
            message: "User updated successfully",
            data: user
        });
    } catch (error) {
        next(error)
    }
}

export const deleteUser = async (req, res, next) => {
    const { id } = req.query;

    try {
        const user = await User.findById(id);
        if (!user) {
            throw new CustomError(404, "User not found");
        }

        await User.findByIdAndDelete(id);

        res.status(200).json({
            success: true,
            message: "User deleted successfully"
        });
    } catch (err) {
        next(err);
    }
};
