import React, { useState, useEffect, useCallback } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate, useParams } from "react-router-dom"
import { toast } from "react-toastify"
import axios from "../utils/axios"
import { removeCategory } from "../redux/features/category/categorySlice"
import { getSubCategories } from "../redux/features/subCategory/subCategorySlice"

export const CategoryPage = () => {
    const [category, setCategory] = useState(null)

    const { subCategories } = useSelector((state) => state.subCategory)
    console.log(subCategories)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const params = useParams()
    console.log(params)

    const fetchCategory = useCallback(async () => {
        const { data } = await axios.get(`/categories/${params.id}`)
        setCategory(data)
    }, [params.id])

    const removeCategoryHandler = () => {
        try {
            dispatch(removeCategory(params.id))
            toast("Post was deleted")
            navigate("/")
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchCategory()
    }, [fetchCategory])

    return (
        <div>
            <div>
                {category?.title}
            </div>
            <div>
                <button onClick={removeCategoryHandler}>Delete</button>
            </div>
            <div>
                <Link to="edit">
                    <button>Update</button>
                </Link>
            </div>
            <div>
                <Link to="new">
                    <button>Add New SubCategory</button>
                </Link>
            </div>
        </div>
    )
}
