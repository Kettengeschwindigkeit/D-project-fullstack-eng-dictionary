import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { removeItem } from "../redux/features/item/itemSlice"
import { EditItemModal } from "./EditItemModal"
import { Modal } from "./Modal"

export const Item = ({ item }) => {
    const [showModal, setShowModal] = useState(false)

    const dispatch = useDispatch()

    const removeItemHandler = () => {
        try {
            dispatch(removeItem(item._id, item.subCategory))
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <li className="flex items-center justify-between hover:bg-blue-50 duration-100">
            <div className="flex m-2 hover:bg-blue-50">
                <div className="p-2 bg-gray-100 text-xs text-gray-600 font-bold hover:text-black cursor-pointer" onClick={() => setShowModal(true)}>
                    {item.title}
                </div>
                &nbsp;
                <div className="p-2 bg-green-100 text-xs text-gray-600 font-bold">
                    {item.translate}
                </div>
            </div>
            <button className="m-2 text-xs text-gray-300 font-bold hover:text-red-500 duration-100" onClick={removeItemHandler}>Delete</button>
            <Modal active={showModal}><EditItemModal oldTitle={item.title} oldTranslate={item.translate} id={item._id} setShowModal={setShowModal} /></Modal>
        </li>
    )
}
