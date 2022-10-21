import React from "react"
import { Route, Routes } from "react-router-dom"
import { Main } from "../components/Main"
import { AddCategoryPage } from "./AddCategoryPage"
import { AddItemPage } from "./AddItemPage"
import { AddSubCategoryPage } from "./AddSubCategoryPage"
import { CategoryPage } from "./CategoryPage"
import { EditCategoryPage } from "./EditCategoryPage"
import { LoginPage } from "./LoginPage"
import { RegisterPage } from "./RegisterPage"
import { SubCategoryPage } from "./SubCategoryPage"

export const MainPage = () => {
    return (
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path=':id' element={<CategoryPage />} />
            <Route path='sub/:id' element={<SubCategoryPage />} />
            <Route path=':id/edit' element={<EditCategoryPage />} />
            <Route path=":id/new" element={<AddSubCategoryPage />} />
            <Route path=":id/:id/new" element={<AddItemPage />} />
            <Route path="register" element={<RegisterPage />} />
            <Route path="login" element={<LoginPage />} />
        </Routes>
    )
}
