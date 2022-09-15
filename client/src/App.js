import React from "react"
import { Route, Routes } from "react-router-dom"
import { Layout } from "./components/Layout"
import { LoginPage } from "./pages/LoginPage"
import { MainPage } from "./pages/MainPage"
import { RegisterPage } from "./pages/RegisterPage"

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="login" element={<LoginPage />} />
      </Routes>
    </Layout>
  )
}

export default App
