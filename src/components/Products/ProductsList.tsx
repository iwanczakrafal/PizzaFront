import React from "react";
import { ProductItemInterface } from "types";
import {ProductCard} from "./ProductCard";

import "./ProductsList.css"
interface Props {
    products: ProductItemInterface[]
}


export const ProductsList = (props: Props) => {
    const products = props.products

    return (
        <div className="products-container">
            <h1 className="products-container-title">THE BEST PIZZA IN TOWN</h1>
            <p className="products-container-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam est harum, libero nemo officiis pariatur, placeat quam quos reiciendis rem suscipit, unde veniam vitae voluptates voluptatum. Dolor id iusto obcaecati.</p>
            <div className="products-wrapper">
                {products.map(product => <ProductCard product={product} key={product.id}/>)}
            </div>

        </div>
    )
}
