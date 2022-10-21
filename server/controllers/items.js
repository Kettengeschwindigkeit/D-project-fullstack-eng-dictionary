import SubCategory from "../models/SubCategory.js"
import Item from "../models/Item.js"

// Create Item
export const createItem = async (req, res) => {
    try {
        const { subCategoryId, title, translate } = req.body

        if (!Item) {
            return res.json({ message: "Title is empty" })
        }

        const newItem = new Item({ title, translate, subCategory: subCategoryId })
        await newItem.save()

        try {
            await SubCategory.findByIdAndUpdate(subCategoryId, {
                $push: { items: newItem._id }
            })
        } catch (error) {
            console.log(error)
        }
        res.json(newItem)
    } catch (error) {
        res.json({ message: "Something went wrong..." })
    }
}

// Get Items
export const getItems = async (req, res) => {
    try {
        const items = await Item.find().sort('title')
        res.json({ items })
    } catch (error) {
        res.json({ message: "Something went wrong..." })
    }
}
