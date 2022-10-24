import Category from "../models/Category.js"
import Item from "../models/Item.js"
import SubCategory from "../models/SubCategory.js"

// Create SubCategory
export const createSubCategory = async (req, res) => {
    try {
        const { categoryId, title } = req.body

        if (!SubCategory) {
            return res.json({ message: "Title is empty" })
        }

        const newSubCategory = new SubCategory({ title, category: categoryId })
        await newSubCategory.save()

        try {
            await Category.findByIdAndUpdate(categoryId, {
                $push: { subCategories: newSubCategory._id }
            })
        } catch (error) {
            console.log(error)
        }
        res.json(newSubCategory)
    } catch (error) {
        res.json({ message: "Something went wrong..." })
    }
}

// Get All SubCategories
export const getAllSubCategories = async (req, res) => {
    try {
        const subCategories = await SubCategory.find()
        res.json({ subCategories })
    } catch (error) {
        res.json({ message: "Something went wrong..." })
    }
}

// Get SubCategories
export const getSubCategories = async (req, res) => {
    try {
        const category = await Category.findById(req.params.id)
        const list = await Promise.all(
            category.subCategories.map((subCategory) => SubCategory.findById(subCategory._id))
        )
        res.json(list)
    } catch (error) {
        res.json({ message: "Something went wrong..." })
    }
}

// Get Items
export const getItems = async (req, res) => {
    try {
        const subCategory = await SubCategory.findById(req.params.id)
        const list = await Promise.all(subCategory.items.map(item => Item.findById(item)))
        res.json(list)
    } catch (error) {
        res.json({ message: "Something went wrong..." })
    }
}

// Remove SubCategory
export const removeSubCategory = async (req, res) => {
    try {
        const subCategory = await SubCategory.findByIdAndDelete(req.params.id)
        const category = await Category.findById(subCategory.category)
        const categoryId = (category._id).toString()

        if (!subCategory) return res.json({ message: 'This subCategory doesn\'t exist' })

        await Item.deleteMany({ subCategory: req.params.id })

        await Category.findByIdAndUpdate(categoryId, {
            $pull: { subCategories: req.params.id }
        })
        res.json({ subCategory, message: 'subCategory was deleted' })
    } catch (error) {
        res.json({ message: "Something went wrong..."})
    }
}
