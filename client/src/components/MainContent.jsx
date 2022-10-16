import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import axios from '../utils/axios'
import { checkIsAuth } from "../redux/features/auth/authSlice"
import { MainPage } from "../pages/MainPage"
import { Navbar } from "./Navbar"
import { getAllSubCategories } from "../redux/features/subCategory/subCategorySlice"

export const MainContent = () => {
    const [categories, setCategories] = useState([])

    const { subCategories } = useSelector(state => state.subCategory)

    const dispatch = useDispatch()
    const isAuth = useSelector(checkIsAuth)

    const fetchMyCategories = async () => {
        try {
            const { data } = await axios.get('/categories/user/me')
            setCategories(data)
            console.log("SUBCAT", data);
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
        <div className="flex justify-between">
            <div className="flex flex-col w-[200px]">
                {isAuth && <Navbar categories={categories} />}
            </div>
            <div className="flex flex-col basis-4/5">
                <MainPage />
            </div>
        </div>
    )
}
