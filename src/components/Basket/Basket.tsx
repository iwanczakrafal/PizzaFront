import React from "react";
import {DeleteOutline} from "@material-ui/icons";
import {SingleBasketProduct} from "./SingleBasketProduct";
import {HttpMethod, useFetch} from "../../utils/hooks/useFetch";
import { ProductsFromBasketRes } from "types";
import { OneProductInBasket } from "types";
import {useCookies} from "react-cookie";
import {CustomError} from "../CustomError/CustomError";


import "./Basket.css";


export const Basket = () => {


    const [data, status,fetchData] = useFetch('http://localhost:3001/basket');
    const [totalPrice, totalPriceStatus] = useFetch('http://localhost:3001/basket/total-price');
    const [cookie, setCookie] = useCookies(['access']);

    const dataToMap = status === 'fetched' ? data! as ProductsFromBasketRes : null;





    const clearBasket = () => {
        fetchData(`http://localhost:3001/basket/all`,{
            method: HttpMethod.DELETE,
            headers: {
                'content-type': 'application/json;charset=UTF-8'},
            body: {},
        })
      window.location.reload();
        return;
    }



    return (
        cookie.access.user ?
        <div className="basket-container">
            <div className="basket-left">
                <table className="basket-table">
                    <tr className="basket-trTitle">
                        <th></th>
                        <th>Product</th>
                        <th>Name</th>
                        <th>Extras</th>
                        <th>Price</th>
                    </tr>
                    {
                        status === 'fetched'?
                            dataToMap!.map(product => <SingleBasketProduct product={product as OneProductInBasket} key={product.id}/>)
                            :
                            null
                    }
                </table>
                <button className="basket-clear" onClick={clearBasket}><DeleteOutline/></button>
            </div>
            <div className="basket-right">
                <div className="basket-wrapper">
                    <h2 className="basket-title">BASKET TOTAL</h2>
                    <div className="basket-totalText">
                        <b className="basket-totalTextTitle">Total:</b>{totalPriceStatus === 'fetched' && `$${totalPrice}`}
                    </div>
                    <button className="basket-button">CHECKOUT NOW!</button>
                </div>
            </div>
        </div>
            :
            <CustomError message='Something went wrong'></CustomError>

    )


}