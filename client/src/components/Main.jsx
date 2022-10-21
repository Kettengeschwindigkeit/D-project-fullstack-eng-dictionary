import React from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { checkIsAuth } from "../redux/features/auth/authSlice"

export const Main = () => {
    const isAuth = useSelector(checkIsAuth)

    return <>{isAuth && <Link to="/new" className="m-2 text-xs text-gray-600 font-bold hover:text-black">Add New Category</Link>}</>
}
