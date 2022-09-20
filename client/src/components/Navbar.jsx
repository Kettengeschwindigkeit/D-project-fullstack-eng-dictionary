import React from "react"
import { useSelector } from "react-redux"
import { checkIsAuth, logout } from "../redux/features/auth/authSlice"
import { categories } from "../data/data"
import { Category } from "./Category"

export function Navbar() {
    const isAuth = useSelector(checkIsAuth)

    return (
        <div>
            {isAuth && <ul className="w-[200px] bg-gray-300 top-0 bottom-0">
                {categories.map(category => <Category key={category.id} category={category} />)}
            </ul>}
        </div>
    )
}
