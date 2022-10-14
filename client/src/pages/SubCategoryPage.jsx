import React, { useEffect, useCallback } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useParams } from "react-router-dom"
import { getItems } from "../redux/features/item/itemSlice"

export const SubCategoryPage = () => {
    const dispatch = useDispatch()
    const params = useParams()

    const { items } = useSelector(state => state.item)

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
        <>
            <div>SUB</div>
            <button>Add</button>
            <ul>
                {items?.map(item => <li key={item._id}>{item.title} {item.translate}</li>)}
            </ul>
        </>
    )
}
