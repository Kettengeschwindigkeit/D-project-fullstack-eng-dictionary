import React, { useState, useEffect, useCallback } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate, useParams } from "react-router-dom"
import { toast } from "react-toastify"
import axios from "../utils/axios"
import { removeCategory } from "../redux/features/category/categorySlice"
import { Modal } from "../components/Modal"
import { AddSubCategoryModal } from "../components/AddSubCategoryModal"

export const CategoryPage = () => {
    const [showModal, setShowModal] = useState(false)
    const [category, setCategory] = useState(null)

    const { status } = useSelector((state) => state.category)
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
            navigate("/")
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchCategory()
    }, [fetchCategory])

    return (
        <>
            <div className="flex items-center justify-between">
                <ul className="flex gap-8 m-2">
                    <li className="text-xs text-gray-600 font-bold hover:text-black">
                            <button onClick={() => setShowModal(true)}>Add New SubCategory</button>
                    </li>
                    <li className="text-xs text-gray-600 font-bold hover:text-black">
                        <Link to="edit">
                            <button>Update</button>
                        </Link>
                    </li>
                    <li className="text-xs text-gray-600 font-bold hover:text-red-500">
                        <button onClick={removeCategoryHandler}>Delete</button>
                    </li>
                </ul>
                <div className="m-2 text-xs text-gray-600 font-bold">
                    {category?.title}
                </div>
            </div>
            <Modal active={showModal}><AddSubCategoryModal setShowModal={setShowModal} /></Modal>
        </>

    )
}

// =====================================================================================================================================

// import React, { useState, useEffect, useCallback } from "react"
// import { useDispatch, useSelector } from "react-redux"
// import { Link, useNavigate, useParams } from "react-router-dom"
// import { toast } from "react-toastify"
// import axios from "../utils/axios"
// import { createCategory, getCategoryById, removeCategory } from "../redux/features/category/categorySlice"
// import { Modal } from "../components/Modal"
// import { AddSubCategoryModal } from "../components/AddSubCategoryModal"
// import { getSubCategories } from "../redux/features/subCategory/subCategorySlice"

// export const CategoryPage = () => {
//     const [showModal, setShowModal] = useState(false)
//     const [category, setCategory] = useState(null)

//     const { status } = useSelector((state) => state.category)
//     const dispatch = useDispatch()
//     const navigate = useNavigate()
//     const params = useParams()
//     console.log(params)

//     // const fetchCategory = useCallback(async () => {
//     //     const { data } = await axios.get(`/categories/${params.id}`)
//     //     setCategory(data)
//     // }, [params.id])

//     const removeCategoryHandler = () => {
//         try {
//             dispatch(removeCategory(params.id))
//             navigate("/")
//         } catch (error) {
//             console.log(error)
//         }
//     }

//     const { subCategories } = useSelector(state => state.subCategory)
//     console.log(subCategories)
//     const fetchsubCategories = useCallback(async () => {
//         try {
//             dispatch(getCategoryById(params.id))
//         } catch (error) {
//             console.log(error)
//         }
//     }, [dispatch, params.id])

//     useEffect(() => {
//         fetchsubCategories()
//     }, [fetchsubCategories])

//     // useEffect(() => {
//     //     fetchCategory()
//     // }, [fetchCategory])

//     return (
//         <>
//             <div className="flex items-center justify-between">
//                 <ul className="flex gap-8 m-2">
//                     <li className="text-xs text-gray-600 font-bold hover:text-black">
//                             <button onClick={() => setShowModal(true)}>Add New SubCategory</button>
//                     </li>
//                     <li className="text-xs text-gray-600 font-bold hover:text-black">
//                         <Link to="edit">
//                             <button>Update</button>
//                         </Link>
//                     </li>
//                     <li className="text-xs text-gray-600 font-bold hover:text-red-500">
//                         <button onClick={removeCategoryHandler}>Delete</button>
//                     </li>
//                 </ul>
//                 <div className="m-2 text-xs text-gray-600 font-bold">
//                     {category?.title}
//                 </div>
//             </div>
//             <Modal active={showModal}><AddSubCategoryModal setShowModal={setShowModal} /></Modal>
//         </>

//     )
// }
