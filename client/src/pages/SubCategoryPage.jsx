import React, { useEffect, useCallback, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate, useParams } from "react-router-dom"
import { AddItemModal } from "../components/AddItemModal"
import { Item } from "../components/Item"
import { Modal } from "../components/Modal"
import { getItems } from "../redux/features/item/itemSlice"
import { removeSubCategory } from "../redux/features/subCategory/subCategorySlice"

export const SubCategoryPage = () => {
    const [showModal, setShowModal] = useState(false)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const params = useParams()

    const { items } = useSelector(state => state.item)
    console.log(items)
    const sortedItems = [...items].sort((a, b) => a.title > b.title ? 1 : -1)

    const fetchItems = useCallback(async () => {
        try {
            dispatch(getItems(params.id))
        } catch (error) {
            console.log(error)
        }
    }, [dispatch, params.id])

    const removeSubCategoryHandler = () => {
        try {
            dispatch(removeSubCategory(params.id))
            navigate("/")
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchItems()
    }, [fetchItems])

    return (
        <div>
            <div className="flex items-center justify-between">
                <ul className="flex gap-8 m-2">
                    <li className="text-xs text-gray-600 font-bold hover:text-black">
                        <button onClick={() => setShowModal(true)}>Add New Item</button>
                    </li>
                    <li className="text-xs text-gray-600 font-bold hover:text-black">
                        <Link to="edit">
                            <button>Update</button>
                        </Link>
                    </li>
                    <li className="text-xs text-gray-600 font-bold hover:text-red-500">
                        <button onClick={removeSubCategoryHandler}>Delete</button>
                    </li>
                </ul>
                <div className="m-2 text-xs text-gray-600 font-bold">SUB</div>
            </div>
            <ul>
                {sortedItems.map(item => <Item key={item._id} item={item} />)}
            </ul>
            <Modal active={showModal}><AddItemModal setShowModal={setShowModal} /></Modal>
        </div>

    )
}
