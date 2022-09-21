import React from "react";
import {Navbar} from "../components/Navbar/Navbar";
import {Slider} from "../components/Slider/Slider";
import {ProductsList} from "../components/Products/ProductsList";
import {Footer} from "../components/Footer/Footer";
import {ProductItemInterface} from "types";
import {useFetch} from "../utils/hooks/useFetch";
import {RootState} from "../redux/store";
import {useSelector} from "react-redux";





export const HomeView = () => {
    const user = useSelector((state: RootState) => state.user);
    const [data,status] = useFetch(user.ok ?'http://localhost:3001/product/special':'http://localhost:3001/product')


    // @ts-ignore
    const dataToMap: ProductItemInterface[] = status === 'fetched' ? [...data] : null;


    return (
        <>

            <Navbar/>
            <Slider/>
            {
                status === 'fetched' && <ProductsList products={dataToMap}/>
            }
            <Footer/>
        </>
    )
}