import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { useParams } from "react-router-dom"
import { createItem } from "../redux/features/item/itemSlice"

export const AddItemModal = ({ setShowModal }) => {
    const [title, setTitle] = useState("")
    const [translate, setTranslate] = useState("")

    const dispatch = useDispatch()
    const params = useParams()
    console.log(params)

    const clearFormHandler = () => {
        setTitle("")
        setShowModal(false)
    }

    const handleSubmit = () => {
        try {
            const subCategoryId = params.id
            dispatch(createItem({ subCategoryId, title, translate }))
            setTitle("")
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
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                />
            </label>
            <label className="text-xs text-gray-600 font-bold">Translate:
                <input
                    type="text"
                    className="input"
                    value={translate}
                    onChange={e => setTranslate(e.target.value)}
                />
            </label>
            <div className="flex gap-8 items-center justify-center mt-4">
                <button
                    className="btn"
                    onClick={handleSubmit}
                >
                    Add
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
