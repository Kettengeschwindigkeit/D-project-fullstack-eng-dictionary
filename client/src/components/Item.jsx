import React from "react"

export const Item = ({ item }) => {
    return (
        <li className="flex m-2">
            <div className="p-2 bg-gray-100 text-xs text-gray-600 font-bold hover:text-black">
                {item.title}
            </div>
            &nbsp;
            <div className="p-2 bg-green-100 text-xs text-gray-600 font-bold">
                {item.translate}
            </div>
        </li>
    )
}
