import mongoose from "mongoose";
const petSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    species: {
        type: String,
        required: true,
        enum: ["dog", "cat", "other"]
    }, 
    breed: {
        String
    },
    age: {
        Number
    },
    sex: {
        type: String,
        enum: ['male', 'female']
    },
    description: String,
    imageUrl: String,
    status: {
        type: String,
        enum: ['available', 'adopted'],
        default: 'available'
    },
}, {
    timestamps: true
})
export default mongoose.model("Pet", petSchema);