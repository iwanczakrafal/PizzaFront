import React from "react";
import {SingleProduct} from "../components/SingleProduct/SingleProduct";
import {Footer} from "../components/Footer/Footer";
import {Navbar} from "../components/Navbar/Navbar";



export const ProductView = ()=> {
 return(
     <>
        <Navbar/>
        <SingleProduct/>
         <Footer/>
     </>
 )



}