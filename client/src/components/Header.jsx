import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify"
import { useDebounce } from "../hooks/useDebounce";
import { checkIsAuth, logout } from "../redux/features/auth/authSlice"
import axios from "../utils/axios";

export function Header() {
    const [dropdown, setDropdown] = useState(false)
    const [items, setItems] = useState([])
    const [value, setValue] = useState("")

    const debounced = useDebounce(value)
    const dispatch = useDispatch()
    const isAuth = useSelector(checkIsAuth)
    const navigate = useNavigate()

    const changeHandler = (event) => {
        setValue(event.target.value)
    }

    const logoutHandler = () => {
        dispatch(logout())
        navigate("/")
        toast("Come again!")
        window.localStorage.removeItem("token")
    }

    const showDropdown = (item) => {
        navigate(`sub/${item.subCategory}`)
        setDropdown(false)
        setValue("")
    }

    async function fetch() {
        const response = await axios.get("/items")
        setItems(response.data.items)
    }

    useEffect(() => {
        if (debounced.length >= 2) {
            fetch().then(() => setDropdown(true))
        } else {
            setDropdown(false)
        }
    }, [debounced])

    return (
        <nav className="flex items-center justify-between bg-gray-300 shadow-md">
            <Link to="/" className="m-2 px-4 text-gray-600 font-bold drop-shadow-md hover:text-black">Wordbook</Link>
            {isAuth && <div className="relative">
                <input type="text" className="h-[42px] px-4 py-2 border rounded shadow-lg focus:outline-none focus:ring focus:ring-gray-200" value={value} onChange={changeHandler} placeholder="Search..." />
                {dropdown && <ul className="absolute h-[200px] top-[42px] left-0 right-0 bg-white shadow-md list-none overflow-y-scroll">
                    {items
                        .filter(item => item.title.indexOf(value) !== -1)
                        .map(item => <li key={item._id} className="hover:text-white hover:bg-gray-300 hover:transition-colors cursor-pointer" onClick={() => showDropdown(item)}>{item.title}</li>)
                    }
                </ul>}
            </div>}
            {isAuth
                ? <button className="m-4 btn" onClick={logoutHandler}>Sign Out</button>
                : <Link to="/login"><button className="m-4 btn">Sign In</button></Link>
            }
        </nav>
    )
}
