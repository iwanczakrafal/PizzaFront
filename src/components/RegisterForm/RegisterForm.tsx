import React from "react";

import "./RegisterForm.css";

export const RegisterForm = () => {


    return (
        <div className="registerForm-container">
            <div className="registerForm-wrapper">
                <h1>CREATE ACCOUNT</h1>
                <form className="registerForm">
                    <label>
                        <input
                            type="text"
                            name="name"
                            required
                            placeholder="name"
                        />
                    </label>
                    <label>
                        <input
                            type="text"
                            name="lastName"
                            required
                            placeholder="last name"
                        />
                    </label>
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
                    <span className="registerForm-agreement">
                  By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
              </span>
                    <button className="registerForm-btn">CREATE</button>
                </form>
            </div>
        </div>
    )

};
