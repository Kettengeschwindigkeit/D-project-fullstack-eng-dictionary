import React from "react";
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify"
import { checkIsAuth, logout } from "../redux/features/auth/authSlice"

export function Header() {
    const dispatch = useDispatch()
    const isAuth = useSelector(checkIsAuth)
    const navigate = useNavigate()

    const logoutHandler = () => {
        dispatch(logout())
        navigate("/")
        toast("Come again!")
        window.localStorage.removeItem("token")
    }

    return (
        <nav className="flex justify-between items-center bg-gray-300 shadow-md">
            <Link to="/" className="m-2 text-gray-600">English Wordbook</Link>
            {isAuth && <Link to="/new" className="m-2 text-gray-600">Add New Category</Link>}
            {isAuth 
                ? <button className="m-2 py-2 px-4 border rounded bg-gray-400" onClick={logoutHandler}>Sign Out</button> 
                : <button className="m-2 py-2 px-4 border rounded bg-gray-400"><Link to="/login">Sign In</Link></button>
            }
        </nav>
    )
}
