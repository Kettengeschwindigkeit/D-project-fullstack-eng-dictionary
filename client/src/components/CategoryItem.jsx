import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getSubCategories } from "../redux/features/subCategory/subCategorySlice";

export function CategoryItem({ category }) {
    // const [subCategories, setSubCategories] = useState(false)

    // const dispatch = useDispatch()
    // const params = useParams()

    // const { subCategories } = useSelector((state) => state.subCategory)
    // const fetchSubCategories = useCallback(async () => {
    //     try {
    //         dispatch(getSubCategories(params.id))
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }, [params.id, dispatch])

    // useEffect(() => {
    //     fetchSubCategories()
    // }, [fetchSubCategories])

    // useEffect(() => {
    //     dispatch(getSubCategories(params.id))
    // }, [params.id, dispatch])

    return (
        <>
            <button
                className="w-[190px] px-1 py-1 border bg-gray-300 hover:bg-gray-200"
                // key={category.id} onClick={() => setSubCategories(prev => !prev)}
            >
                {category.title}
            </button>
            {/* <ul>
                {subCategories
                    ? category.subCategories.map(sub => {
                        console.log(sub)
                        return <li className="w-[190px] border border-gray-300 text-center bg-gray-200 hover:bg-gray-300" key={sub._id}>{sub.title}</li>
                    })
                    : null}
            </ul> */}
        </>
    )
}
