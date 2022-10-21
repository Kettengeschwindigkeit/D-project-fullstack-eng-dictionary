import React from "react"
import { useSelector } from "react-redux"
import { checkIsAuth } from "../redux/features/auth/authSlice"
import { MainPage } from "../pages/MainPage"
import { Navbar } from "./Navbar"

export const MainContent = () => {
    const isAuth = useSelector(checkIsAuth)

    return (
        <div className="flex h-screen">
            <div>
                {isAuth && <Navbar />}
            </div>
            <div className="w-full">
                <MainPage />
            </div>
        </div>
    )
}
