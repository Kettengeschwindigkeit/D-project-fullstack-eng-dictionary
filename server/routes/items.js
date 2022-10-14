import { Router } from "express"
import { createItem } from "../controllers/items.js"
import { checkAuth } from "../utils/checkAuth.js"

const router = new Router()

// Create Item 
// http://localhost:5000/api/items/:id
router.post("/:id", checkAuth, createItem)

export default router
