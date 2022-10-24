import React from "react"
import { Route, Routes } from "react-router-dom"
import { Main } from "../components/Main"
import { AddSubCategoryPage } from "../components/AddSubCategoryModal"
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
            <Route path="register" element={<RegisterPage />} />
            <Route path="login" element={<LoginPage />} />
        </Routes>
    )
}
