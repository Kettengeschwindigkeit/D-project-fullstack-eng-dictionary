import { configureStore } from "@reduxjs/toolkit"
import authSlice from "./features/auth/authSlice"
import categorySlice from "./features/category/categorySlice"
import itemSlice from "./features/item/itemSlice"
import subCategorySlice from "./features/subCategory/subCategorySlice"

export const store = configureStore({
    reducer: {
        auth: authSlice,
        category: categorySlice,
        subCategory: subCategorySlice,
        item: itemSlice
    }
})
