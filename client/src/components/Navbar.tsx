import React from "react"
import { ICategory } from "../models"
import { Category } from "./Category"

interface NavbarProps {
    categories: ICategory[]
  }

export function Navbar({ categories }: NavbarProps) {
    return (
        <ul className="w-[200px] bg-gray-300 top-0 bottom-0">
            {categories.map(category => <Category key={category.id} category={category} />)}
        </ul>
    )
}
