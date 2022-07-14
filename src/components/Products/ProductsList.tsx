import React from "react";
import {ProductCard} from "./ProductCard";

import "./ProductsList.css"



export const ProductsList = () => {

    return (
        <div className="products-container">
            <h1>THE BEST PIZZA IN TOWN</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam est harum, libero nemo officiis pariatur, placeat quam quos reiciendis rem suscipit, unde veniam vitae voluptates voluptatum. Dolor id iusto obcaecati.</p>
            <div className="products-wrapper">
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
            </div>

        </div>
    )
}
