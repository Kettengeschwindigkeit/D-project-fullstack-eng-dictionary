import React from "react"
import { useSelector } from "react-redux"

import { CategoryItem } from "./CategoryItem"

export function Navbar() {
    const { categories } = useSelector(state => state.category)
    const sortedCategories = [...categories].sort((a, b) => a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1)

    return (
        <>
            <ul className="w-[200px] h-screen bg-gray-300">
                {sortedCategories?.map(category => <CategoryItem key={category._id} category={category} />)}
            </ul>
        </>
    )
}
