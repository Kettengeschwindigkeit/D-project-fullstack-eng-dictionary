import React, { useState, useEffect, useCallback } from "react"
import { useDispatch } from "react-redux"
import { Link, useNavigate, useParams } from "react-router-dom"
import { toast } from "react-toastify"
import axios from "../utils/axios"
import { removeCategory } from "../redux/features/category/categorySlice"

export const CategoryPage = () => {
    const [category, setCategory] = useState(null)

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const params = useParams()

    const fetchCategory = useCallback(async () => {
        const { data } = await axios.get(`/categories/${params.id}`)
        setCategory(data)
    }, [params.id])

    const removeCategoryHandler = () => {
        try {
            dispatch(removeCategory(params.id))
            toast("Category was deleted")
            navigate("/")
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchCategory()
    }, [fetchCategory])

    return (
        <div className="flex items-center justify-between">
            <ul className="flex gap-8 m-2">
                <li className="text-xs text-gray-600 font-bold hover:text-black">
                    <Link to="new">
                        <button>Add New SubCategory</button>
                    </Link>
                </li>
                <li className="text-xs text-gray-600 font-bold hover:text-black">
                    <Link to="edit">
                        <button>Update</button>
                    </Link>
                </li>
                <li className="text-xs text-gray-600 font-bold hover:text-black">
                    <button onClick={removeCategoryHandler}>Delete</button>
                </li>
            </ul>
            <div className="m-2 text-xs text-gray-600 font-bold">
                {category?.title}
            </div>
        </div>
    )
}
