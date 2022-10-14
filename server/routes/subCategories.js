import { Router } from "express"
import { createSubCategory, getItems } from "../controllers/SubCategories.js"
import { checkAuth } from "../utils/checkAuth.js"

const router = new Router()

// Create SubCategory 
// http://localhost:5000/api/subCategories/:id
router.post("/:id", checkAuth, createSubCategory)

// Get Items
// http://localhost:5000/api/subCategories/items/:id
router.get("/items/:id", getItems)

export default router
