import React, {FormEvent, useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

import "./LoginForm.css";
import {useDispatch, useSelector} from "react-redux";
import { RootState } from "src/redux/store";
import {setUser} from "../../redux/slice/user";
import {HttpMethod, useFetch} from "../../utils/hooks/useFetch";


export const LoginForm = () => {

    const { ok, isAdmin, accessToken } = useSelector((state: RootState) => state.user);
    const dispatch = useDispatch();
    const [data,status,fetchData] = useFetch()
    const navigate = useNavigate();
    const [form, setForm] = useState({
        email: '',
        password: '',
    });

    useEffect(()=>{
        if(data !== undefined && data){
            const {ok,isAdmin,accessToken} = data
            dispatch(setUser({
             ok,
                isAdmin,
                accessToken
            }))
            navigate('/', {replace: true})

        }
    },[data])


    const updateForm = (key: string, value: any) => {
        setForm({
            ...form,
            [key]: value,
        })

    }

    const login = (e:FormEvent) => {
        e.preventDefault();
        if(form.email !== '' && form.password !== ''){
            fetchData(`http://localhost:3001/auth/login`,{
                method: HttpMethod.POST,
                headers: {
                    'content-type': 'application/json;charset=UTF-8'},
                body: {
                    email: form.email,
                    password: form.password,
                }
            })
            return;
        };
        return alert('Nie możesz zostawić pustego pola')
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
                    <a href="/register">Create account</a>
                </form>
            </div>
        </div>
    )

};
