import React, {FormEvent, useContext, useState} from "react";
import {UserContext} from "../../contexts/user.context";
import {useNavigate} from "react-router-dom";

import "./LoginForm.css";


export const LoginForm = () => {

    const{user, setUser} = useContext(UserContext)
    const navigate = useNavigate();

    const [form, setForm] = useState({
        email: '',
        password: '',
    });
    const updateForm = (key: string, value: any) => {
        setForm({
            ...form,
            [key]: value,
        })

    }

    const login = async (e:FormEvent) => {
        e.preventDefault();
            const res = await fetch("http://localhost:3001/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(form),

            });

            const data = await res.json();
            localStorage.setItem('user', JSON.stringify(data));
            setUser(JSON.parse(localStorage.getItem('user') as string))
            navigate('/')
    };


    return (
        <div className="LoginForm-container">
            <div className="LoginForm-wrapper">
                <h1>SIGN IN</h1>
                <form className="LoginForm" onSubmit={login} >
                    <label>
                        <input
                            type="email"
                            name="email"
                            required
                            placeholder="email"
                            value={form.email}
                            onChange={e => updateForm('email', e.target.value) }
                        />
                    </label>
                    <label>
                        <input
                            type="password"
                            name="password"
                            required
                            placeholder="password"
                            value={form.password}
                            onChange={e => updateForm('password', e.target.value)}
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
