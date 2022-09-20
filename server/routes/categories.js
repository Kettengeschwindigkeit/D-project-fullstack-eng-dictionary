import { Router } from "express"
import { createCategory } from "../controllers/categories.js"
import { checkAuth } from "../utils/checkAuth.js"

const router = new Router()

router.post('/', createCategory)

export default router
