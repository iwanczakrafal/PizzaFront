import {DeleteOutline} from "@material-ui/icons";
import React from "react";

import "./Basket.css";


export const Basket = () => {


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
                    <tr className="basket-tr">
                        <td><span className="basket-remove-product">&times;</span></td>
                        <td>
                            <div className="basket-image">
                                <img src="/img/pizza.png"/>
                            </div>
                        </td>
                        <td>
                            <span className="basket-name">CORALZO</span>
                        </td>
                        <td>
                            <span className="basket-addon"></span>
                        </td>
                        <td>
                            <span className="basket-price">$39.80</span>
                        </td>
                    </tr>
                    <tr className="basket-tr">
                        <td><span className="basket-remove-product">&times;</span></td>
                        <td>
                            <div className="basket-image">
                                <img
                                    src="/img/pizza.png"
                                />
                            </div>
                        </td>
                        <td>
                            <span className="basket-name">CORALZO</span>
                        </td>
                        <td>
              <span className="basket-addon">
                Salami
              </span>
                        </td>
                        <td>
                            <span className="basket-price">$39.80</span>
                        </td>
                    </tr>
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