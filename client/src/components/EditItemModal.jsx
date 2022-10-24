import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { updateItem } from "../redux/features/item/itemSlice"

export const EditItemModal = ({ id, oldTitle, oldTranslate, setShowModal }) => {
    const [newTitle, setNewTitle] = useState(oldTitle)
    const [newTranslate, setNewTranslate] = useState(oldTranslate)

    const dispatch = useDispatch()

    const clearFormHandler = () => {
        setShowModal(false)
    }

    const handleSubmit = () => {
        try {
            dispatch(updateItem({ newTitle, newTranslate, id }))
            setShowModal(false)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <form className="mx-auto py-10" onSubmit={e => e.preventDefault()}>
            <label className="text-xs text-gray-600 font-bold">Title:
                <input
                    type="text"
                    className="input"
                    value={newTitle}
                    onChange={e => setNewTitle(e.target.value)}
                />
            </label>
            <label className="text-xs text-gray-600 font-bold">Translate:
                <input
                    type="text"
                    className="input"
                    value={newTranslate}
                    onChange={e => setNewTranslate(e.target.value)}
                />
            </label>
            <div className="flex gap-8 items-center justify-center mt-4">
                <button
                    className="btn"
                    onClick={handleSubmit}
                >
                    Update
                </button>
                <button
                    className="btn-cancel"
                    onClick={clearFormHandler}
                >
                    Cancel
                </button>
            </div>
        </form>
    )
}
