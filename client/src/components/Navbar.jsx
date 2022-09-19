import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { toast } from "react-toastify"
import { checkIsAuth, logout } from "../redux/features/auth/authSlice"
import { categories } from "../data/data"
import { Category } from "./Category"

export function Navbar() {
    const dispatch = useDispatch()
    const isAuth = useSelector(checkIsAuth)

    const logoutHandler = () => {
        dispatch(logout())
        window.localStorage.removeItem("token")
        toast("Come again!")
    }

    return (
        <div>
            {isAuth && <ul className="w-[200px] bg-gray-300 top-0 bottom-0">
                {categories.map(category => <Category key={category.id} category={category} />)}
            </ul>}
        </div>
    )
}
