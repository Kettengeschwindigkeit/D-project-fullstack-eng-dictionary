import { Router } from "express"
import { createCategory, getCategories, getCategoryById, getMyCategories, getSubCategories, removeCategory, updateCategory } from "../controllers/categories.js"
import { checkAuth } from "../utils/checkAuth.js"

const router = new Router()

// Create Category
// http://localhost:5000/api/categories
router.post('/', checkAuth, createCategory)

// Get All Categories
// http://localhost:5000/api/categories
router.get('/', getCategories)

// Get Category By Id
// http://localhost:5000/api/categories/:id
router.get('/:id', getCategoryById)

// Get My Categories
// http://localhost:5000/api/categories/user/me
router.get('/user/me', checkAuth, getMyCategories)

// Remove Category
// http://localhost:5000/api/categories/:id
router.delete('/:id', checkAuth, removeCategory)

// Update Category
// http://localhost:5000/api/categories/:id
router.put('/:id', checkAuth, updateCategory)

// Get Category SubCategories
// http://localhost:5000/api/categories/subCategories/:id
router.get('/subCategories/:id', getSubCategories)

export default router
