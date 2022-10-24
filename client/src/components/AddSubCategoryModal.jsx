import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { createSubCategory } from "../redux/features/subCategory/subCategorySlice"

export const AddSubCategoryModal = ({ setShowModal }) => {
    const [title, setTitle] = useState("")

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const params = useParams()

    const clearFormHandler = () => {
        setTitle("")
        navigate(`/${params.id}`)
        setShowModal(false)
    }

    const handleSubmit = () => {
        try {
            const categoryId = params.id
            dispatch(createSubCategory({ categoryId, title }))
            setTitle("")
            navigate(`/${params.id}`)
            setShowModal(false)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <form className="mx-auto py-10" onSubmit={e => e.preventDefault()}>
            <label className="text-xs text-gray-600 font-bold">Subcategory title:
                <input
                    type="text"
                    className="input"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
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
