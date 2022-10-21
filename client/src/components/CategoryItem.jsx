import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SubCategoryItem } from "./SubCategoryItem";

export function CategoryItem({ category }) {
    const [subCategoriesList, setSubCategoriesList] = useState(false)

    return (
        <li>
            <Link to={category._id}>
                <button
                    className="w-[190px] px-1 py-1 border bg-gray-300 text-gray-600 font-bold hover:bg-gray-200 hover:text-black"
                    onClick={() => setSubCategoriesList(prev => !prev)}
                >
                    {category.title}
                </button>
            </Link>
            <div>
                {subCategoriesList && category.subCategories?.map(sub => <SubCategoryItem key={sub._id} subCategory={sub} />)}
            </div>
        </li>
    )
}
