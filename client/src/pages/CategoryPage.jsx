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

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const params = useParams()

    const fetchCategory = useCallback(async () => {
        const { data } = await axios.get(`/categories/${params.id}`)
        setCategory(data)
    }, [params.id])

    const fetchSubCategories = useCallback(async () => {
        try {
            dispatch(getSubCategories(params.id))
        } catch (error) {
            console.log(error)
        }
    }, [params.id, dispatch])

    console.log(params)

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

    useEffect(() => {
        fetchSubCategories()
    }, [fetchSubCategories])

    return (
        <div>
            <div>
                {category?.title}
            </div>
            <div>
                <button onClick={removeCategoryHandler}>Delete</button>
            </div>
            <div>
                <Link to={`/${params.id}/edit`}>
                    <button>Update</button>
                </Link>
            </div>
            <ul>
                {subCategories?.map(sub => <li><Link to={`/${params.id}/${sub._id}`} key={sub._id}>{sub.title}</Link></li>)}
            </ul>
        </div>
    )
}
