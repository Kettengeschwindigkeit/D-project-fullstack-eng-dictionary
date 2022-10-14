import React, { useState, useEffect, useCallback } from "react"
import { Link } from "react-router-dom"
import { CategoryItem } from "./CategoryItem"

export function Navbar({ categories }) {
    return (
        <div>
            <ul className="w-[200px] bg-gray-300 top-0 bottom-0">
                {categories?.map(category => <Link to={category._id}><CategoryItem key={category.id} category={category} /></Link>)}
            </ul>
        </div>
    )
}
