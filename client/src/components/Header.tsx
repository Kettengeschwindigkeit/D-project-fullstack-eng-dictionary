import React from "react";
import { Link } from "react-router-dom";

export function Header() {
    return (
        <nav className="flex justify-between items-center bg-gray-300 shadow-md">
            <Link to="/" className="m-2 text-gray-600">English Wordbook</Link>
            <button className="m-2 py-2 px-4 border rounded bg-gray-400"><Link to="/auth">Sign In</Link></button>
        </nav>
    )
}
