import React from 'react';
import {PhoneEnabled} from "@material-ui/icons";
import {Link} from "react-router-dom";


import "./Navbar.css";


export const Navbar = () => {

    return (
        <div className="navbar-container">

                <div className="navbar-left">
                    <div className="navbar-call">
                        <PhoneEnabled style={{width:"32px" , height:"32px", color:"white"}}/>
                    </div>
                    <div className="navbar-callInfo">
                        <div className="navbar-callTitle">ORDER NOW!</div>
                        <div className="navbar-callNumber">012 345 678</div>
                    </div>
                </div>
                <div className="navbar-center">
                   <Link to="/">
                       <h1 className="navbar-logo">BroPizza</h1>
                   </Link>
                </div>
                <div className="navbar-right">
                    <Link to="/basket">
                    <div className="navbar-menuItem"><h4>BASKET</h4></div>
                    </Link>
                    <Link to="/register">
                    <div className="navbar-menuItem"><h4>REGISTER</h4></div>
                    </Link>
                    <Link to="/login">
                    <div className="navbar-menuItem"><h4>SIGN IN</h4></div>
                    </Link>
                </div>

        </div>
    )
};