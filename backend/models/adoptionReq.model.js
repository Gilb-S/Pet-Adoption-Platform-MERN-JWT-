import mongoose from "mongoose";
const adoptionRequestSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    petId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Pet",
        required: true
    },
    status: {
        type: String,
        enum: ['pending', 'approved', 'rejected'],
        default: 'pending'
    },
    note: String
}, {
    timestamps: true,
})
adoptionRequestSchema.index({userId: 1, petId: 1}, { unique: true}) // 1 active quest per user
export default mongoose.model("AdoptionRequest", adoptionRequestSchema);