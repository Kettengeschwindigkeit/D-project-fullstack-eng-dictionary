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

    console.log(params.id)

    const clearFormHandler = () => {
        setTitle("")
        navigate(`/${params.id}`)
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
