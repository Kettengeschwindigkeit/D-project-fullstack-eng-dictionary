import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { createSubCategory } from "../redux/features/subCategory/subCategorySlice"

export const AddSubCategoryPage = () => {
    const [title, setTitle] = useState("")

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const params = useParams()
    console.log(params)

    const clearFormHandler = () => {
        setTitle("")
    }

    const handleSubmit = () => {
        try {
            const categoryId = params.id
            dispatch(createSubCategory({ categoryId, title }))
            setTitle("")
            navigate("/")
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <form className="w-1/3 mx-auto py-10" onSubmit={e => e.preventDefault()}>
            <label className="text-xs text-gray-600">Subcategory title:
                <input
                    type="text"
                    className="w-full mt-1 py-1 px-2 border border-gray-400 text-xs text-black bg-gray-300 rounded outline-none"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                />
            </label>
            <div className="flex gap-8 items-center justify-center mt-4">
                <button
                    className="flex justify-center items-center px-4 py-2 rounded text-sm bg-gray-400 border border-gray-500"
                    onClick={handleSubmit}
                >
                    Add
                </button>
                <button
                    className="flex justify-center items-center px-4 py-2 rounded text-sm bg-red-400 border border-gray-500"
                    onClick={clearFormHandler}
                >
                    Cancel
                </button>
            </div>
        </form>
    )
}
