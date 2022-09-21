import React from 'react';
import {PhoneEnabled} from "@material-ui/icons";
import {Link, useNavigate} from "react-router-dom";
import {useFetch} from "../../utils/hooks/useFetch";

import "./Navbar.css";
import {useSelector} from "react-redux";
import {RootState} from "../../redux/store";


export const Navbar = () => {


    const [data,status,fetchData] = useFetch();
    const navigate = useNavigate();
    const user = useSelector((state: RootState) => state.user);

    const logOut = () => {
        fetchData("http://localhost:3001/auth/logout");
        navigate('/', {replace: true})
        window.location.reload()
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
                    {
                        user.isAdmin
                            ? <Link to="/dashboard"><div className="navbar-menuItem"><h4>DASHBOARD</h4></div></Link>
                            :null
                    }
                    {
                        user.ok
                        ? <Link to="/basket"><div className="navbar-menuItem"><h4>BASKET</h4></div></Link>
                        : null
                    }
                    {
                        !user.ok
                        ? <Link to="/register"><div className="navbar-menuItem"><h4>REGISTER</h4></div></Link>
                        : null
                    }
                    {
                        user.ok
                        ?<Link to="/"><div className="navbar-menuItem" onClick={logOut}><h4>SIGN OUT</h4></div></Link>
                        : <Link to="/login"><div className="navbar-menuItem"><h4>SIGN IN</h4></div></Link>
                    }
                </div>

        </div>
    )
};