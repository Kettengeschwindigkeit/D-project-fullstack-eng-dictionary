import { Router } from "express"
import { createSubCategory, getAllSubCategories, getItems } from "../controllers/SubCategories.js"
import { checkAuth } from "../utils/checkAuth.js"

const router = new Router()

// Create SubCategory 
// http://localhost:5000/api/subCategories/:id
router.post("/:id", checkAuth, createSubCategory)

// Get All SubCategory 
// http://localhost:5000/api/subCategories
router.get("/", getAllSubCategories)

// Get Items
// http://localhost:5000/api/subCategories/items/:id
router.get("/items/:id", getItems)

export default router
