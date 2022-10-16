import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SubCategoryItem } from "./SubCategoryItem";

export function CategoryItem({ category }) {
    const [subCategoriesList, setSubCategoriesList] = useState(false)

    return (
        <>
            <button
                className="w-[190px] px-1 py-1 border bg-gray-300 hover:bg-gray-200"
                onClick={() => setSubCategoriesList(prev => !prev)}
            >
                {category.title}
            </button>
            <ul>
                {subCategoriesList &&
                    category.subCategories?.map(sub => {
                        return <li className="w-[190px] border border-gray-300 text-center bg-gray-200 hover:bg-gray-300" key={sub._id}>
                            <Link to={`/${sub.category}/${sub._id}`}><SubCategoryItem sub={sub} /></Link>
                        </li>
                    })
                }
            </ul>
        </>
    )
}
