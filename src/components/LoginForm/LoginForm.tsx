import React from "react";

import "./LoginForm.css";

export const LoginForm = () => {


    return (
        <div className="LoginForm-container">
            <div className="LoginForm-wrapper">
                <h1>SIGN IN</h1>
                <form className="LoginForm">
                    <label>
                        <input
                            type="email"
                            name="email"
                            required
                            placeholder="email"
                        />
                    </label>
                    <label>
                        <input
                            type="password"
                            name="password"
                            required
                            placeholder="password"
                        />
                    </label>
                    <a href="/">Forgotten your password?</a>
                    <button className="LoginForm-btn">LOGIN</button>
                    <a href="/">Create account</a>
                </form>
            </div>
        </div>
    )

};
