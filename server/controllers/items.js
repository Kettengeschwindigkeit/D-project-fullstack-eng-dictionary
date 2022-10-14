import SubCategory from "../models/SubCategory.js"
import Item from "../models/Item.js"

export const createItem = async (req, res) => {
    try {
        const { subCategoryId, title, translate } = req.body

        if (!Item) {
            return res.json({ message: "Title is empty" })
        }

        const newItem = new Item({ title, translate })
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
