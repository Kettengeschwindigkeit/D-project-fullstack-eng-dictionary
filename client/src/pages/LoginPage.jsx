import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import LoadingBar from "react-top-loading-bar"
import { checkIsAuth, loginUser } from "../redux/features/auth/authSlice"

export function LoginPage() {
    const [progress, setProgress] = useState(0)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const { status } = useSelector((state) => state.auth)
    const { isLoading } = useSelector((state) => state.auth)

    console.log(status)
    console.log(isLoading)

    const dispatch = useDispatch()
    const isAuth = useSelector(checkIsAuth)
    const navigate = useNavigate()

    const handleSubmit = () => {
        try {
            dispatch(loginUser({ email, password }))
            setProgress(100)
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
        <>
            {isLoading && <LoadingBar color='#f11946' progress={progress} onLoaderFinished={() => setProgress(0)} />}
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
        </>
    )
}
