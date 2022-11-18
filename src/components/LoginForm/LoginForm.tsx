import React, {FormEvent, useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "src/redux/store";
import {setUser} from "../../redux/slice/user";
import {HttpMethod, useFetch} from "../../utils/hooks/useFetch";

import "./LoginForm.css";

type ErrorMessage = { error: string }

export const LoginForm = () => {

    const {ok, isAdmin, accessToken} = useSelector((state: RootState) => state.user);
    const dispatch = useDispatch();
    const [data, status, fetchData, cache, clearCache] = useFetch();
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState(null);
    const [form, setForm] = useState({
        email: '',
        password: '',
    });

    useEffect(() => {

        if (data && (data as ErrorMessage).error) {
            const {error} = data
            setErrorMessage(error);

        } else if (data !== undefined && data) {
            const {ok, isAdmin, accessToken} = data
            dispatch(setUser({
                ok,
                isAdmin,
                accessToken
            }))
            navigate('/', {replace: true})
        }

    }, [data])


    const updateForm = (key: string, value: any) => {
        setForm({
            ...form,
            [key]: value,
        })
        setErrorMessage(null)

    }

    const login = async (e: FormEvent) => {
        e.preventDefault();
        clearCache();

        if (form.email !== '' && form.password !== '') {
            await fetchData(`http://localhost:3001/auth/login`, {
                method: HttpMethod.POST,
                headers: {
                    'content-type': 'application/json;charset=UTF-8'
                },
                body: {
                    email: form.email,
                    password: form.password,
                }
            })
            return;
        }
    };


    return (
        <div className="loginForm-container">
            <div className="loginForm-wrapper">
                <h1>SIGN IN</h1>
                <form className="loginForm" onSubmit={login}>
                    <label>
                        <input
                            type="email"
                            name="email"
                            required
                            placeholder="E-mail"
                            value={form.email}
                            onChange={e => updateForm('email', e.target.value)}
                        />
                    </label>
                    <label>
                        <input
                            type="password"
                            name="password"
                            required
                            placeholder="Password"
                            value={form.password}
                            onChange={e => updateForm('password', e.target.value)}
                        />
                    </label>
                    {
                        errorMessage && <p className="loginForm-error">{errorMessage}</p>
                    }
                    <a href="/">Forgotten your password?</a>
                    <button className="loginForm-btn">LOGIN</button>
                    <a href="/register">Create account</a>
                </form>
            </div>
        </div>
    )

};
