import mongoose from "mongoose"

const ItemSchema = new mongoose.Schema(
    {
        title: { type: String, required: true },
        translate: { type: String, required: true },
    },
    { timestamps: true }
)

export default mongoose.model('Item', ItemSchema)
