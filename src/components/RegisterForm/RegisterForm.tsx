import React, {FormEvent, useState} from "react";
import {HttpMethod, useFetch} from "../../utils/hooks/useFetch";
import {useNavigate} from "react-router-dom";

import "./RegisterForm.css";

export const RegisterForm = () => {


    const [data, status, fetchData] = useFetch()
    const [registerForm, setRegisterForm] = useState({
        name: '',
        lastName: '',
        email: '',
        password: '',
    });
    const [created, setCreated] = useState(true)
    const updateRegisterForm = (key: string, value: any) => {
        setRegisterForm({
            ...registerForm,
            [key]: value,
        })
    };


    const register = (e: FormEvent) => {
        e.preventDefault();
        if (registerForm.email !== '' && registerForm.password !== '') {
            fetchData(`http://localhost:3001/user/register`, {
                method: HttpMethod.POST,
                headers: {
                    'content-type': 'application/json;charset=UTF-8'
                },
                body: {
                    name: registerForm.name,
                    lastName: registerForm.lastName,
                    email: registerForm.email,
                    password: registerForm.password,
                }
            })
            setCreated(true)
            return;
        }
    };

    return (
        !created
            ?
            <div className="registerForm-container">
                <div className="registerForm-wrapper">
                    <h1>CREATE ACCOUNT</h1>
                    <form className="registerForm" onSubmit={register}>
                        <label>
                            <input
                                type="text"
                                name="name"
                                required
                                placeholder="name"
                                value={registerForm.name}
                                onChange={e => updateRegisterForm('name', e.target.value)}
                            />
                        </label>
                        <label>
                            <input
                                type="text"
                                name="lastName"
                                required
                                placeholder="last name"
                                value={registerForm.lastName}
                                onChange={e => updateRegisterForm('lastName', e.target.value)}
                            />
                        </label>
                        <label>
                            <input
                                type="email"
                                name="email"
                                required
                                placeholder="email"
                                value={registerForm.email}
                                onChange={e => updateRegisterForm('email', e.target.value)}
                            />
                        </label>
                        <label>
                            <input
                                type="password"
                                name="password"
                                required
                                placeholder="password"
                                value={registerForm.password}
                                onChange={e => updateRegisterForm('password', e.target.value)}
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

            :

            <div className="registerForm-container">
                <div className="registerForm-wrapper">
                    <div><h1>{registerForm.name}!, account was created successfully</h1></div>
                </div>
            </div>
    )

};
