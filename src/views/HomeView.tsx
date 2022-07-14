import React from "react";
import {Navbar} from "../components/Navbar/Navbar";
import {Slider} from "../components/Slider/Slider";
import {ProductsList} from "../components/Products/ProductsList";
import {Footer} from "../components/Footer/Footer";


export const HomeView = () => {
    return (
        <>

            <Navbar/>
            <Slider/>
            <ProductsList/>
            <Footer/>
        </>
    )
}