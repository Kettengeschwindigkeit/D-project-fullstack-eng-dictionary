import mongoose from 'mongoose'

const SubCategorySchema = new mongoose.Schema({
    title: { 
        type: String, 
        required: true
    },
    category: {
        type: mongoose.Schema.Types.ObjectId, ref: 'Category'
    },
    items: [
        { 
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'Item' 
        }
    ]
}, { timestamps: true })

export default mongoose.model('SubCategory', SubCategorySchema)
