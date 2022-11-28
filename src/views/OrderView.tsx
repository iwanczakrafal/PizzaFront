import React from "react";
import {Navbar} from "../components/Navbar/Navbar";
import {Footer} from "../components/Footer/Footer";
import {Order} from "../components/Order/Order";


export const OrderView = () => {

    return (
        <>
            <Navbar/>
            <Order/>
            <Footer/>
        </>

    )

}