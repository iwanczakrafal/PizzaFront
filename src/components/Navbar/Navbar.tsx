import React, {useEffect} from 'react';
import {Home, PhoneEnabled} from "@material-ui/icons";
import {Link, useNavigate} from "react-router-dom";
import {useFetch} from "../../utils/hooks/useFetch";
import {useCookies} from "react-cookie";

import "./Navbar.css";


export const Navbar = () => {


    const [data, status, fetchData] = useFetch();
    const navigate = useNavigate();

    const [cookie, setCookie] = useCookies(['access']);

    const logOut = async () => {
        fetchData("http://localhost:3001/auth/logout");
        return;
    };

    useEffect(() => {
        status === 'fetched' && navigate('/', {replace: true});
    }, [status])

    return (
        <div className="navbar-container">

            <div className="navbar-left">
                <div className="navbar-call">
                    <PhoneEnabled style={{width: "32px", height: "32px"}}/>
                </div>
                <div className="navbar-callInfo">
                    <div className="navbar-callTitle">ORDER NOW!</div>
                    <div className="navbar-callNumber">012 345 678</div>
                </div>
            </div>
            <div className="navbar-center">
                <Link to="/">
                    <h1 className="navbar-logo">BroPizza</h1>
                    <div className="navbar-mobileHome"><Home style={{width: "40px", height: "40px"}}/></div>
                </Link>
            </div>
            <div className="navbar-right">
                {
                    cookie.access?.isAdmin
                        ? <Link to="/dashboard">
                            <div className="navbar-menuItem"><h4>DASHBOARD</h4></div>
                        </Link>
                        : null
                }
                {
                    cookie.access?.user
                        ? <Link to="/basket">
                            <div className="navbar-menuItem"><h4>BASKET</h4></div>
                        </Link>
                        : null
                }
                {
                    !cookie.access
                        ? <Link to="/register">
                            <div className="navbar-menuItem"><h4>REGISTER</h4></div>
                        </Link>
                        : null
                }
                {
                    cookie.access?.user
                        ? <div className="navbar-menuItem" onClick={logOut}><h4>SIGN OUT</h4></div>
                        : <Link to="/login">
                            <div className="navbar-menuItem"><h4>SIGN IN</h4></div>
                        </Link>
                }
            </div>

        </div>
    )
};