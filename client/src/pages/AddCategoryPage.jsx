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
        navigate("/")
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
            <label className="text-xs text-gray-600 font-bold">Category title:
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
                    onClick={submitHandler}
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
