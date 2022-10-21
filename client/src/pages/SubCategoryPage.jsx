import React, { useEffect, useCallback } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useParams } from "react-router-dom"
import { Item } from "../components/Item"
import { getItems } from "../redux/features/item/itemSlice"

export const SubCategoryPage = () => {
    const dispatch = useDispatch()
    const params = useParams()

    const { items } = useSelector(state => state.item)

    const sortedItems = [...items].sort((a, b) => a.title > b.title ? 1 : -1)

    const fetchItems = useCallback(async () => {
        try {
            dispatch(getItems(params.id))
        } catch (error) {
            console.log(error)
        }
    }, [dispatch, params.id])

    useEffect(() => {
        fetchItems()
    }, [fetchItems])

    return (
        <div>
            <div className="flex items-center justify-between">
                <ul className="flex gap-8 m-2">
                    <li className="text-xs text-gray-600 font-bold hover:text-black">
                        <Link to="new">
                            <button>Add New Item</button>
                        </Link>
                    </li>
                    <li className="text-xs text-gray-600 font-bold hover:text-black">
                        <Link to="edit">
                            <button>Update</button>
                        </Link>
                    </li>
                    <li className="text-xs text-gray-600 font-bold hover:text-black">
                        <button>Delete</button>
                    </li>
                </ul>
                <div className="m-2 text-xs text-gray-600 font-bold">SUB</div>
            </div>
            <ul >
                {sortedItems.map(item => <Item key={item._id} item={item} />)}
            </ul>
        </div>

    )
}
