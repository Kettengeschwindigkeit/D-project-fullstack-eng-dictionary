import React, { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { ToastContainer } from "react-toastify"
import { Header } from "./components/Header"
import { Footer } from "./components/Footer"
import { MainContent } from "./components/MainContent"
import "react-toastify/dist/ReactToastify.css"
import { getMe } from "./redux/features/auth/authSlice"
import { Modal } from "./components/Modal"
import { Route, Routes } from "react-router-dom"
import { AddCategoryPage } from "./pages/AddCategoryPage"

function App() {
  const [modalActive, setModalActive] = useState(false)
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
      <Modal active={modalActive}>
        <Routes>
          <Route path="new" element={<AddCategoryPage setModalActive={setModalActive} />} />
        </Routes>
      </Modal>
    </>
  )
}

export default App
