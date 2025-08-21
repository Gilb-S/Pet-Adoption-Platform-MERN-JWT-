import mongoose from 'mongoose';

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("MongoDB connected baby!")
    } catch (error) {
        console.log("error connecting to mongodb", error)
        process.exit(1);
    }
}