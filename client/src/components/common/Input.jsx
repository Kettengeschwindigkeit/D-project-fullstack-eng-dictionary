import React from "react"

export const Input = ({ label, type, value, setValue }) => {
    return (
        <label className="text-xs text-gray-600 font-bold">
            {label}
            <input
                type={type}
                className="w-full mt-1 px-2 py-1 text-xs text-black bg-gray-300 border border-gray-400 rounded shadow-lg focus:outline-none focus:ring focus:ring-gray-200"
                value={value}
                onChange={e => setValue(e.target.value)}
            />
        </label>
    )
}
