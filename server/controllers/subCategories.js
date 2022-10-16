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
