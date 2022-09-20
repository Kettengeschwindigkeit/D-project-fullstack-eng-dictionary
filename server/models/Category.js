import mongoose from 'mongoose'

const CategorySchema = new mongoose.Schema({
    title: { 
        type: String, 
        required: true
    },
    subCategories: [
        { 
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'SubCategory' 
        }
    ]
}, { timestamps: true })

export default mongoose.model('Category', CategorySchema)
