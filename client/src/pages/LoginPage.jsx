import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"

import { toast } from "react-toastify"
import LoadingBar from "react-top-loading-bar"

import { checkIsAuth, loginUser } from "../redux/features/auth/authSlice"

import { Input } from "../components/common/Input"

export const LoginPage = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [showLoader, setshowLoader] = useState(0)

    const { isLoading } = useSelector((state) => state.auth)
    const { status } = useSelector((state) => state.auth)

    const dispatch = useDispatch()
    const isAuth = useSelector(checkIsAuth)
    const navigate = useNavigate()

    const handleSubmit = () => {
        try {
            dispatch(loginUser({ email, password }))
            setshowLoader(100)
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
            {isLoading && <LoadingBar color='#f11946' progress={showLoader} onLoaderFinished={() => setshowLoader(0)} />}
            <form className="w-1/4 h-60 mx-auto mt-40" onSubmit={e => e.preventDefault()}>
                <h1 className="text-lg text-center text-gray-600 font-bold drop-shadow">
                    Authorization
                </h1>
                <div className="mb-4">
                    <Input label="Email:" type="text" value={email} setValue={setEmail} />
                </div>
                <div>
                    <Input label="Password:" type="password" value={password} setValue={setPassword} />
                </div>
                <div className="flex gap-8 justify-center mt-4">
                    <button type="submit" className="btn" onClick={handleSubmit}>
                        Sign In
                    </button>
                    <Link to="/register" className="flex justify-center items-center text-sm text-gray-600 font-bold drop-shadow hover:text-black focus:outline-none">
                        Have no account?
                    </Link>
                </div>
            </form>
        </>
    )
}
