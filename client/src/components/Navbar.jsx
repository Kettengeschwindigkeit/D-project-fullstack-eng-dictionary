import React, { useState, useEffect, useCallback } from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import axios from '../utils/axios'
import { checkIsAuth } from "../redux/features/auth/authSlice"
import { CategoryItem } from "./CategoryItem"

export function Navbar() {
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

    if (categories) {
        return (
            <div>
                {isAuth && <ul className="w-[200px] bg-gray-300 top-0 bottom-0">
                    {categories?.map(category => <Link to={category._id}><CategoryItem key={category.id} category={category} /></Link>)}
                </ul>}
            </div>
        )
    }
}
