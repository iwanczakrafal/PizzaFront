import React from "react";


export const ProductCard = () => {

    return (
        <div className="product-container">
            <img src="/img/pizza.png" alt=""/>
            <h1 className="product-title">SALAMI</h1>
            <span className="product-price">$ 15</span>
            <p className="product-description">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A cupid
            </p>
        </div>
    )
}