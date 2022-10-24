import React, { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { ToastContainer } from "react-toastify"
import { Header } from "./components/Header"
import { Footer } from "./components/Footer"
import { MainContent } from "./components/MainContent"
import "react-toastify/dist/ReactToastify.css"
import { getMe } from "./redux/features/auth/authSlice"
import { getMyCategories } from "./redux/features/category/categorySlice"

import LoadingBar from 'react-top-loading-bar'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getMe())
  }, [dispatch])

  useEffect(() => {
    dispatch(getMyCategories())
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
