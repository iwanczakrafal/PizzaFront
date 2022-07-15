import {DeleteOutline} from "@material-ui/icons";
import React, {useContext, useEffect, useState} from "react";
import {SingleProduct} from "./SingleProduct";
import {UserContext} from "../../contexts/user.context";

import "./Basket.css";



export const Basket = () => {
const {user} = useContext(UserContext);
const [products, setProducts] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                const res = await fetch(`http://localhost:3001/basket`,{

                })
                const data = await res.json();
                setProducts(data);
            } catch (err) {
            }
        })();
    }, []);

    return (
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
                    {/*{products.map(product => <SingleProduct/>)}*/}
                </table>
                    <button className="basket-clear"><DeleteOutline/></button>
            </div>
            <div className="basket-right">
                <div className="basket-wrapper">
                    <h2 className="basket-title">BASKET TOTAL</h2>
                    <div className="basket-totalText">
                        <b className="basket-totalTextTitle">Total:</b>$79.60
                    </div>
                    <button className="basket-button">CHECKOUT NOW!</button>
                </div>
            </div>
        </div>

    )


}