import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ICategory } from "../models";

interface CategoryProps {
    category: ICategory
}

export function Category({ category }: CategoryProps) {
    const [subCategories, setSubCategories] = useState(false)

    return (
        <>
            <button className="w-[190px] px-1 py-1 border bg-gray-300 hover:bg-gray-200" key={category.id} onClick={() => setSubCategories(prev => !prev)}>{category.name}</button>
            <ul>
                {subCategories ? category.subCategories.map(sub => <li className="w-[190px] border border-gray-300 text-center bg-gray-200 hover:bg-gray-300" key={sub.id}><Link to={sub.path}>{sub.title}</Link></li>) : null}
            </ul>
        </>
    )
}
