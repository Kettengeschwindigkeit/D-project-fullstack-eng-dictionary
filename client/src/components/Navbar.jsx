import React from "react"
import { Link } from "react-router-dom"
import { CategoryItem } from "./CategoryItem"
import { useParams } from "react-router-dom"

export function Navbar({ categories }) {
    const params = useParams()
    console.log(params)

    return (
        <div>
            <ul className="w-[200px] bg-gray-300 top-0 bottom-0">
                {categories?.map(category => <li key={category._id}><Link to={category._id}><CategoryItem category={category} /></Link></li>)}
            </ul>
        </div>
    )
}
