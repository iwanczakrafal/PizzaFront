import React, {useState} from "react";
import { ProductItemInterface } from "types";
import {Link} from "react-router-dom";




interface Props {
    product: ProductItemInterface | null
}

export const ProductCard = (props: Props) => {

    const product = props.product;
    const [photo,setPhoto] = useState(`http://localhost:3001/product/photo/${product && product.id}`);

    return (
        product &&
        <Link className="product-container" to={product.isSpecial ?`/product/special/${product.id}`:`/product/${product.id}`}>
            <img src={photo} alt=""/>
            <h1 className="product-title">{product.name}</h1>
            <span className="product-price">{product.price} PLN</span>
            <p className="product-description">{product.description}</p>
        </Link>


    )
}