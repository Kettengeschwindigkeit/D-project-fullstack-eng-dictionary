import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { checkIsAuth, loginUser } from "../redux/features/auth/authSlice"

export function LoginPage() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const { status } = useSelector((state) => state.auth)

    console.log(status)

    const dispatch = useDispatch()
    const isAuth = useSelector(checkIsAuth)
    const navigate = useNavigate()

    const handleSubmit = () => {
        try {
            dispatch(loginUser({ email, password }))
            // navigate("/")
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
            <h1 className="text-lg text-center text-gray-600 font-bold drop-shadow">Authorization</h1>
            <div className="mb-4">
                <label className="text-xs text-gray-600 font-bold">Email:
                    <input
                        type="text"
                        className="input"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </label>
            </div>
            <div>
                <label className="text-xs text-gray-600 font-bold">Password:
                    <input
                        type="password"
                        className="input"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </label>
            </div>
            <div className="flex gap-8 justify-center mt-5">
                <button
                    type="submit"
                    className="btn"
                    onClick={handleSubmit}
                >
                    Sign In
                </button>
                <Link to="/register" className="flex justify-center items-center text-sm text-gray-600 font-bold drop-shadow hover:text-black focus:outline-none">Have no account?</Link>
            </div>
        </form>
    )
}
