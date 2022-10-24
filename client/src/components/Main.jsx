import React, { useState } from "react"
import { useSelector } from "react-redux"
import { AddCategoryModal } from "./AddCategoryModal"
import { checkIsAuth } from "../redux/features/auth/authSlice"
import { Modal } from "./Modal"

export const Main = () => {
    const [showModal, setShowModal] = useState(false)
    const isAuth = useSelector(checkIsAuth)

    return (
        <div>
            {isAuth && <button className="m-2 text-xs text-gray-600 font-bold hover:text-black" onClick={() => setShowModal(true)}>Add New Category</button>}
            <Modal active={showModal}><AddCategoryModal setShowModal={setShowModal} /></Modal>
        </div>
    )
}
