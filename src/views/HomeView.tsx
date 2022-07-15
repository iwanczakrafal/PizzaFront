import React, {useEffect, useState} from "react";
import {Navbar} from "../components/Navbar/Navbar";
import {Slider} from "../components/Slider/Slider";
import {ProductsList} from "../components/Products/ProductsList";
import {Footer} from "../components/Footer/Footer";
import {ProductItemInterface} from "types";


export const HomeView = () => {

    const [products,setProducts] = useState<ProductItemInterface[]>([])
    useEffect(() => {
        (async () => {
            try {
                const res = await fetch(`http://localhost:3001/product`)
                const data = await res.json();
                setProducts(data);
            } catch (err) {
            }
        })();
    }, []);


    return (
        <>

            <Navbar/>
            <Slider/>
            <ProductsList products={products}/>
            <Footer/>
        </>
    )
}