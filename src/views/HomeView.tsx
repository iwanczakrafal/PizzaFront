import React, {useEffect} from "react";
import {Navbar} from "../components/Navbar/Navbar";
import {Slider} from "../components/Slider/Slider";
import {ProductsList} from "../components/Products/ProductsList";
import {Footer} from "../components/Footer/Footer";
import {ProductItemInterface} from "types";
import {useFetch} from "../utils/hooks/useFetch";
import {useCookies} from "react-cookie";


export const HomeView = () => {

    const [data, status, fetchData] = useFetch('http://localhost:3001/product')
    const [cookie, setCookie] = useCookies(['access']);


    const dataToMap = status === 'fetched' ? data : null;

    useEffect(() => {
        cookie.access ?
            fetchData('http://localhost:3001/product/special')
            :
            fetchData('http://localhost:3001/product')
    }, [cookie.access])

    return (
        <>

            <Navbar/>
            <Slider/>
            {
                status === 'fetched' ? <ProductsList products={dataToMap as ProductItemInterface[] | null}/>
                    : null
            }
            <Footer/>
        </>
    )
}