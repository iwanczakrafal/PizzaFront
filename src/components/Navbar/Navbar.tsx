import React from 'react';
import {PhoneEnabled} from "@material-ui/icons";


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
                    <h1 className="navbar-logo">BroPizza</h1>
                </div>
                <div className="navbar-right">
                    <div className="navbar-menuItem"><h4>BASKET</h4></div>
                    <div className="navbar-menuItem"><h4>REGISTER</h4></div>
                    <div className="navbar-menuItem"><h4>SIGN IN</h4></div>
                </div>

        </div>
    )
};