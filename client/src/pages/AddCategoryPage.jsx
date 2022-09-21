import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { createCategory } from "../redux/features/category/categorySlice"

export const AddCategoryPage = () => {
    const [title, setTitle] = useState("")

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const clearFormHandler = () => {
        setTitle("")
    }

    const submitHandler = () => {
        try {
            dispatch(createCategory({ title }))
            navigate("/")
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <form className="w-1/3 mx-auto py-10" onSubmit={e => e.preventDefault()}>
            <label className="text-xs text-gray-600">Category title:
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
                    onClick={submitHandler}
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
