import React from "react";
import { Link } from "react-router-dom";

export function RegisterPage() {
    return (
        <form className="w-1/4 h-60 mx-auto mt-40" onSubmit={e => e.preventDefault()}>
            <h1 className="text-lg text-center text-gray-600">Register</h1>
            <label className="text-xs text-gray-600">Email:
                <input type="text" className="w-full mt-1 py-1 px-2 border border-gray-400 text-xs text-black bg-gray-300 rounded outline-none" />
            </label>
            <label className="text-xs text-gray-600">Password:
                <input type="password" className="w-full mt-1 py-1 px-2 border border-gray-400 text-xs text-black bg-gray-300 rounded outline-none" />
            </label>
            <div className="flex gap-8 justify-center mt-4">
                <button type="submit" className="flex justify-center items-center px-4 py-2 rounded text-sm bg-gray-400 border border-gray-500">Register</button>
                <Link to="/login" className="flex justify-center items-center text-sm text-gray-600">Already have account?</Link>
            </div>
        </form>
    )
}
