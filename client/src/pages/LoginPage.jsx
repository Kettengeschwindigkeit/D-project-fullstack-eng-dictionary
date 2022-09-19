import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { checkIsAuth, loginUser } from "../redux/features/auth/authSlice"

export function LoginPage() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const { status } = useSelector((state) => state.auth)

    const dispatch = useDispatch()
    const isAuth = useSelector(checkIsAuth)
    const navigate = useNavigate()

    const handleSubmit = () => {
        try {
            dispatch(loginUser({ email, password }))
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        if (status) {
            toast(status)
        }
        if (isAuth) {
            navigate("/")
        }
    }, [status, isAuth, navigate])

    return (
        <form className="w-1/4 h-60 mx-auto mt-40" onSubmit={e => e.preventDefault()}>
            <h1 className="text-lg text-center text-gray-600">Authorization</h1>
            <label className="text-xs text-gray-600">Email:
                <input
                    type="text"
                    className="w-full mt-1 py-1 px-2 border border-gray-400 text-xs text-black bg-gray-300 rounded outline-none"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </label>
            <label className="text-xs text-gray-600">Password:
                <input
                    type="password"
                    className="w-full mt-1 py-1 px-2 border border-gray-400 text-xs text-black bg-gray-300 rounded outline-none"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </label>
            <div className="flex gap-8 justify-center mt-4">
                <button
                    type="submit"
                    className="flex justify-center items-center px-4 py-2 rounded text-sm bg-gray-400 border border-gray-500"
                    onClick={handleSubmit}
                >
                    Sign In
                </button>
                <Link to="/register" className="flex justify-center items-center text-sm text-gray-600">Have no account?</Link>
            </div>
        </form>
    )
}
