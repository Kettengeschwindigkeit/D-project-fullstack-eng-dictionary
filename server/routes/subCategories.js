import { Router } from "express"
import { createSubCategory, getAllSubCategories, getSubCategories, getItems, removeSubCategory } from "../controllers/SubCategories.js"

const router = new Router()

// Create SubCategory 
// http://localhost:5000/api/subCategories/:id
router.post("/:id", createSubCategory)

// Get All SubCategory 
// http://localhost:5000/api/subCategories
router.get("/", getAllSubCategories)

// Get SubCategory 
// http://localhost:5000/api/subCategories/:id
router.get("/:id", getSubCategories)

// Get Items
// http://localhost:5000/api/subCategories/items/:id
router.get("/items/:id", getItems)

// Remove SubCategory
// http://localhost:5000/api/subCategories/:id
router.delete('/:id', removeSubCategory)

export default router
