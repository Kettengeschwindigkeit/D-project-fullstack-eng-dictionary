import React from "react"
import { Route, Routes } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import { Layout } from "./components/Layout"
import { LoginPage } from "./pages/LoginPage"
import { MainPage } from "./pages/MainPage"
import { RegisterPage } from "./pages/RegisterPage"
import "react-toastify/dist/ReactToastify.css"

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="login" element={<LoginPage />} />
      </Routes>
      <ToastContainer position="bottom-right" />
    </Layout>
  )
}

export default App
