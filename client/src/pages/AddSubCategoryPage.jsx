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
        navigate(`/${params.id}`)
    }

    const handleSubmit = () => {
        try {
            const categoryId = params.id
            dispatch(createSubCategory({ categoryId, title }))
            setTitle("")
            navigate(`/${params.id}`)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <form className="w-1/3 mx-auto py-10" onSubmit={e => e.preventDefault()}>
            <label className="text-xs text-gray-600 font-bold">Subcategory title:
                <input
                    type="text"
                    className="w-full mt-1 py-1 px-2 border border-gray-400 text-xs text-black bg-gray-300 rounded shadow-lg focus:outline-none focus:ring focus:ring-gray-200"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                />
            </label>
            <div className="flex gap-8 items-center justify-center mt-4">
                <button
                    className="flex justify-center items-center px-4 py-2 bg-gray-400 text-sm text-gray-800 font-bold border border-gray-500 rounded shadow-lg shadow-gray-400 hover:bg-gray-300 hover:text-black"
                    onClick={handleSubmit}
                >
                    Add
                </button>
                <button
                    className="flex justify-center items-center px-4 py-2 bg-red-400 text-sm text-gray-800 font-bold border border-gray-500 rounded shadow-lg shadow-gray-400 hover:bg-red-300 hover:text-black"
                    onClick={clearFormHandler}
                >
                    Cancel
                </button>
            </div>
        </form>
    )
}
