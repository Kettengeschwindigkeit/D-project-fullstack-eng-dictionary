import Category from "../models/Category.js"

export const createCategory = async (req, res) => {
    try {
        const { title } = req.body

        const newCategory = new Category({ title })

        await newCategory.save()

        return res.json(newCategory)
    } catch (error) {
        console.log(error)
    }
}
