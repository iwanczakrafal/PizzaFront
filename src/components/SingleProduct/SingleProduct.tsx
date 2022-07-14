import React from 'react';

import "./SingleProduct.css";

export const SingleProduct = () => {
    const pizza = {
        id: 1,
        img: "/img/pizza.png",
        name: "CAPRICCIOSA",
        price: 20,
        desc: "lorem ipsum d lorem ipsum dolor lorem ipsum dolor"
    }
return(
    <div className="product-container">
        <div className="product-left">
            <div className="product-image">
                <img src={pizza.img} alt=""/>
            </div>
        </div>
        <div className="product-right">
            <h1 className="product-title">{pizza.name}</h1>
            <span className="product-price">${pizza.price}</span>
            <p className="product-description">{pizza.desc}</p>
            <h3 className="product-choose-addon">Choose additional ingredient</h3>
            <div className="product-addons">
            <select name="option" id="">
                <option value="" selected >None</option>
                <option value="">Salami $2</option>
                <option value="">Cheese $3</option>
                <option value="">Salami $3</option>
            </select>
            </div>
            <div className="product-add">
                <h3>Total price: <span className="product-price">${pizza.price}</span></h3>
                <button>Add to Basket</button>
            </div>
        </div>
    </div>
)



}