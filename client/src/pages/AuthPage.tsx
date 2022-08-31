import React from "react";

export function AuthPage() {
    return (
        <div>
            <div>
                <span>Authorization</span>
                <div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="text" name="email" placeholder="Enter your email..." />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="text" name="password" placeholder="Enter the password..." />
                    </div>
                </div>
            </div>
            <div>
                <button>Log in</button>
                <button>Register</button>
            </div>
        </div>
    )
}
