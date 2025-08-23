import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        unique: true,
        index: true,
        required: true,
        lowercase: true
    },
    passwordHash: {
        type: String,
    },
    tokenVersion: {
        type: Number, 
        default: 0
    }
}, {
    timestamps: true
})

export default mongoose.model("User", userSchema);