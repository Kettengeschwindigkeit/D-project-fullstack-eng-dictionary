import React, { useEffect } from "react"
import { useDispatch } from "react-redux"
import { ToastContainer } from "react-toastify"
import { Header } from "./components/Header"
import { Footer } from "./components/Footer"
import { MainContent } from "./components/MainContent"
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
      <MainContent />
      <ToastContainer position="bottom-right" />
      <Footer />
    </>
  )
}

export default App
