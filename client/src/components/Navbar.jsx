import React, { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { getAllSubCategories } from "../redux/features/subCategory/subCategorySlice"
import axiosInstance from "../utils/axios"
import { CategoryItem } from "./CategoryItem"

export function Navbar() {
    const [categories, setCategories] = useState([])

    const dispatch = useDispatch()

    const fetchMyCategories = async () => {
        try {
            const { data } = await axiosInstance.get('/categories/user/me')
            setCategories(data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchMyCategories()
    }, [])

    useEffect(() => {
        dispatch(getAllSubCategories())
    }, [dispatch])

    return (
        <>
            <ul className="w-[200px] h-screen bg-gray-300">
                {categories?.map(category => <CategoryItem key={category._id} category={category} />)}
            </ul>
        </>
    )
}
