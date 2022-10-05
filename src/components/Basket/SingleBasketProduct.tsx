import React, {FormEvent, MouseEventHandler, useState} from "react";
import {OneProductInBasket} from "types";
import {HttpMethod, useFetch} from "../../utils/hooks/useFetch";
import {Link, useNavigate} from "react-router-dom";


interface Props{
    product: OneProductInBasket;
}



export const SingleBasketProduct = (props: Props) => {

    const product = props.product
    const [photo,setPhoto] = useState(`http://localhost:3001/product/photo/${product && product.productItem.id}`);
    const [data,status,fetchData] = useFetch()

        const removeProduct = () => {

            fetchData(`http://localhost:3001/basket/${product.id}`,{
                method: HttpMethod.DELETE,
                headers: {
                    'content-type': 'application/json;charset=UTF-8'},
                body: {},
            })
            window.location.reload();
            return;
        }

    return(
        product &&
        <tr className="basket-tr">
            <td><span className="basket-remove-product" onClick={removeProduct}>&times;</span></td>
            <td>
            <Link to={product.productItem.isSpecial ? `/product/special/${product.productItem.id}` : `/product/${product.productItem.id}`}>
                <div className="basket-image">
                    <img src={photo} alt={product.productItem.name}/>
                </div>
            </Link>
            </td>
            <td>
                <span className="basket-name">{product.productItem.name}</span>
            </td>
            <td>
                <span className="basket-addon">{ product.option && product.option.name}</span>
            </td>
            <td>
                <span className="basket-price">{product.option ? product.productItem.price + product.option.price : product.productItem.price}</span>
            </td>
        </tr>
    )
}