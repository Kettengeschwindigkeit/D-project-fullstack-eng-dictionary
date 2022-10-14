import React, { useState, useEffect } from "react"
import { useSelector } from "react-redux"
import axios from '../utils/axios'
import { checkIsAuth } from "../redux/features/auth/authSlice"
import { MainPage } from "../pages/MainPage"
import { Navbar } from "./Navbar"

export const MainContent = () => {
    const [categories, setCategories] = useState([])
    
    const isAuth = useSelector(checkIsAuth)

    const fetchMyCategories = async () => {
        try {
            const { data } = await axios.get('/categories/user/me')
            setCategories(data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchMyCategories()
    }, [])

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
