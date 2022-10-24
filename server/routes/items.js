import { Router } from "express"
import { createItem, getItems, removeItem, updateItem } from "../controllers/items.js"

const router = new Router()

// Create Item 
// http://localhost:5000/api/items/:id
router.post("/:id", createItem)

// Get Items
// http://localhost:5000/api/items
router.get("/", getItems)

// Remove Item
// http://localhost:5000/api/items/:id
router.delete('/:id', removeItem)

// Update Item
// http://localhost:5000/api/items/:id
router.put('/', updateItem)

export default router
