import React from "react"
import { Link } from "react-router-dom"

export const SubCategoryItem = ({ subCategory }) => {
    return (
        <Link to={`sub/${subCategory._id}`}>
            <button className="w-[190px] border border-gray-300 bg-gray-200 text-center font-bold text-gray-600 hover:bg-gray-300 hover:text-white">
                {subCategory.title}
            </button>
        </Link>
    )
}
