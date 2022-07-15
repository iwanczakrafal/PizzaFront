import React, {useEffect, useState} from 'react';
import {PhoneEnabled} from "@material-ui/icons";
import {Link} from "react-router-dom";


import "./Navbar.css";


export const Navbar = () => {
    const [showUserContent, setShowUserContent] = useState(false);
    const [showAdminContent, setShowAdminContent] = useState(false);
    const [currentUser, setCurrentUser] = useState(undefined);
    useEffect(() => {

        const user = JSON.parse(localStorage.getItem('user') as string)
        if (user) {
            setCurrentUser(user);
            setShowUserContent(user.roles.includes("ROLE_USER"));
            setShowAdminContent(user.roles.includes("ROLE_ADMIN"));
        }
        // EventBus.on("logout", () => {
        //     logOut();
        // });
        // return () => {
        //     EventBus.remove("logout");
        // };

    }, []);
    const logOut = async () => {
        localStorage.removeItem('user');
        await fetch("http://localhost:3001/auth/logout")
        setShowUserContent(false);
        setShowAdminContent(false);
        setCurrentUser(undefined);
    };
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
                    {currentUser
                        ?<Link to="/"><div className="navbar-menuItem" onClick={logOut}>SIGN OUT</div></Link>
                        : <Link to="/login">
                    <div className="navbar-menuItem"><h4>SIGN IN</h4></div>
                    </Link>
                    }
                </div>

        </div>
    )
};