import mongoose from 'mongoose'

const SubCategorySchema = new mongoose.Schema({
    title: { 
        type: String, 
        required: true
    },
    items: [
        { 
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'Item' 
        }
    ]
}, { timestamps: true })

export default mongoose.model('SubCategory', SubCategorySchema)
