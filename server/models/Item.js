import mongoose from "mongoose"

const ItemSchema = new mongoose.Schema(
    {
        title: { type: String, required: true },
        translate: { type: String, required: true },
        subCategory: {type: mongoose.Schema.Types.ObjectId, ref: 'SubCategory' },
    },
    { timestamps: true }
)

export default mongoose.model('Item', ItemSchema)
