
import mongoose from 'mongoose';

const categorySchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);


categorySchema.index({ name: "text", description: "text" });

export default mongoose.model("Category", categorySchema);