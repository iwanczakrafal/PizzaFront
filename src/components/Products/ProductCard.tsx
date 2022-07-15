import React, { useState } from "react";
import { ProductItemInterface } from "types";
import {Link} from "react-router-dom";


interface Props {
    product: ProductItemInterface
}

export const ProductCard = (props: Props) => {
    const product = props.product;
    const [photo,setPhoto] = useState<string>('');
    (async() => {
        const res = await fetch(`http://localhost:3001/product/photo/${product.id}`)
        setPhoto(res.url)
    })()
    return (

        <Link className="product-container" to={`/product/${product.id}`}>
            <img src={photo} alt=""/>
            <h1 className="product-title">{product.name}</h1>
            <span className="product-price">$ {product.price}</span>
            <p className="product-description">{product.description}</p>
        </Link>

    )
}