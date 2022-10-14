import React, { useState, useEffect, useCallback } from "react"
import { useDispatch } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { updateCategory } from "../redux/features/category/categorySlice"
import axios from "../utils/axios"

export const EditCategoryPage = () => {
    const [title, setTitle] = useState("")

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const params = useParams()

    const clearFormHandler = () => {
        setTitle("")
        navigate("/")
    }

    const fetchCategory = useCallback(async () => {
        const { data } = await axios.get(`/categories/${params.id}`)
        setTitle(data.title)
    }, [params.id])

    const submitHandler = () => {
        try {
            const id = params.id
            dispatch(updateCategory({ title, id }))
            navigate("/")
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchCategory()
    }, [fetchCategory])

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
                    Update
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
