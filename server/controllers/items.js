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

// Remove Item
export const removeItem = async (req, res) => {
    try {
        const item = await Item.findByIdAndDelete(req.params.id)
        const subCategory = await SubCategory.findById(item.subCategory)
        const subCategoryId = (subCategory._id).toString()

        if (!item) return res.json({ message: 'This item doesn\'t exist' })

        await SubCategory.findByIdAndUpdate(subCategoryId, {
            $pull: { items: req.params.id }
        })
        res.json({ item, message: 'Item was deleted' })
    } catch (error) {
        res.json({ message: "Something went wrong..."})
    }
}

// Update Item
export const updateItem = async (req, res) => {
    try {
        const { newTitle, newTranslate, id } = req.body
        const item = await Item.findById(id)

        item.title = newTitle
        item.translate = newTranslate

        await item.save()

        res.json({ item, message: "Item was updated" })
    } catch (error) {
        res.json({ message: "Something went wrong..."})
    }
}
