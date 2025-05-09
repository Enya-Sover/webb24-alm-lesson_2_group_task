const mongoose = require("mongoose");

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

module.exports = mongoose.model("Category", categorySchema);
