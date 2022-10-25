import User from "../models/User.js"
import Category from "../models/Category.js"
import SubCategory from "../models/SubCategory.js"
import Item from "../models/Item.js"

// Create New Category
export const createCategory = async (req, res) => {
    try {
        const { title } = req.body
        const user = User.findById(req.userId)
        const newCategory = new Category({
            username: user.email,
            title 
        })

        await newCategory.save()
        await User.findByIdAndUpdate(req.userId, {
            $push: { categories: newCategory }
        })

        res.json({ newCategory, message: "Category was created" })
    } catch (error) {
        console.log(error)
    }
}

// Get All Categories
export const getCategories = async (req, res) => {
    try {
        const categories = await Category.find().sort('title')
        res.json({ categories })
    } catch (error) {
        res.json({ message: "Something went wrong..."})
    }
}

// Get Category By Id
export const getCategoryById = async (req, res) => {
    try {
        const category = await Category.findById(req.params.id)
        const list = await Promise.all(category.subCategories.map(subCategory => SubCategory.findById(subCategory)))
        res.json({ list, category })
    } catch (error) {
        res.json({ message: "Something went wrong..."})
    }
}

// // Get My Categories & SubCategories
// export const getMyCategories = async (req, res) => {
//     try {
//         const user = await User.findById(req.userId)
//         const list = await Promise.all(
//             user.categories.map((category) => Category.findById(category._id).populate('subCategories'))              
//         )
//         res.json(list)
//     } catch (error) {
//         res.json({ message: "Something went wrong..."})
//     }
// }

// Get My Categories & SubCategories
export const getMyCategories = async (req, res) => {
    try {
        const user = await User.findById(req.userId)
        const list = await Promise.all(
            user.categories.map((category) => Category.findById(category._id))              
        )
        res.json(list)
    } catch (error) {
        res.json({ message: "Something went wrong..."})
    }
}

// Remove Category
export const removeCategory = async (req, res) => {
    try {
        const category = await Category.findByIdAndDelete(req.params.id)
        
        if (!category) return res.json({ message: 'This category doesn\'t exist' })

        const list = await SubCategory.find({ category: req.params.id })

        await Promise.all(list.map(el => Item.deleteMany({ subCategory: (el._id).toString() })))

        await SubCategory.deleteMany({ category: req.params.id })
        
        await User.findByIdAndUpdate(req.userId, {
            $pull: { categories: req.params.id }
        })
        res.json({ category, message: 'Category was deleted' })
    } catch (error) {
        res.json({ message: "Something went wrong..."})
    }
}

// Update Category
export const updateCategory = async (req, res) => {
    try {
        const { title, id } = req.body
        console.log(title, id)
        const category = await Category.findById(id)
        console.log(category)
        category.title = title

        await category.save()

        res.json(category)
    } catch (error) {
        res.json({ message: "Something went wrong..."})
    }
}

// Get SubCategories
export const getSubCategories = async (req, res) => {
    try {
        const category = await Category.findById(req.params.id)
        const list = await Promise.all(category.subCategories.map(sub => SubCategory.findById(sub)))
        res.json(list)
    } catch (error) {
        res.json({ message: "Something went wrong..."})
    }
}
