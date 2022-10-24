import React from "react"

export const Modal = ({ active, children }) => {
    return (
        <div className={active ? "modal-active" : "modal"}>
            <div className="modal-content">
                {children}
            </div>
        </div>
    )
}
