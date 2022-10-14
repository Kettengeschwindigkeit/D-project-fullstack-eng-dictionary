import React, { useEffect } from "react"
import { useDispatch } from "react-redux"
import { ToastContainer } from "react-toastify"
import { Header } from "./components/Header"
import { Navbar } from "./components/Navbar"
import { Footer } from "./components/Footer"
import { MainPage } from "./pages/MainPage"
import "react-toastify/dist/ReactToastify.css"
import { getMe } from "./redux/features/auth/authSlice"

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getMe())
  }, [dispatch])

  return (
    <>
      <Header />

      <ToastContainer position="bottom-right" />
      <Footer />
    </>
  )
}

export default App
