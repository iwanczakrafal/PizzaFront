import React, {useState} from "react";
import { ProductsFromBasketRes } from "types";

interface Props{
    item: ProductsFromBasketRes
}



export const SingleProduct = (props: Props) => {

        const product = props.item
    const [photo,setPhoto] = useState<string>('');
    (async() => {
        // const res = await fetch(`http://localhost:3001/product/photo/${product.productId.id}`)
        // setPhoto(res.url)
    })()
    return(
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
    )
}