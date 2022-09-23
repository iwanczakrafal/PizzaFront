import React, {FormEvent, useEffect, useLayoutEffect, useState} from 'react';
import {useLocation} from "react-router-dom";
import {ProductItemInterface} from 'types';
import {useSelector} from "react-redux";
import {RootState} from "../../redux/store";
import {HttpMethod, useFetch} from "../../utils/hooks/useFetch";
import {CustomError} from "../CustomError/CustomError";

import "./SingleProduct.css";

export const SingleProduct = () => {

    const user = useSelector((state: RootState) => state.user);
    const location = useLocation();
    const id = location.pathname.split("/")[2];
    const specialId = location.pathname.split("/")[3];

    const [data,status,fetchData] = useFetch()
    const [optionsFetch,optionStatus] = useFetch("http://localhost:3001/option")
    const [productFetch,productStatus] = useFetch(user.ok && specialId ? `http://localhost:3001/product/special/${specialId}`:`http://localhost:3001/product/${id}`)

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });


    const [product, setProduct] = useState<ProductItemInterface>({
        id: '',
        name: '',
        price: 0,
        description: '',
        isSpecial: false
    });
    const [options, setOptions] = useState([{
        id: '',
        name: '',
        price: 0
    }])

    const [photo, setPhoto] = useState(`http://localhost:3001/product/photo/${user.ok && specialId ? specialId : id}`);

    const [addForm, setAddForm] = useState({
        productId: specialId ? specialId : id,
        count: 1,
        optionId: ''
    });


    const updateAddForm = (value: string) => {
        setAddForm({
            ...addForm,
            optionId: value
        })

    }

    const addProductToBasket = (e: FormEvent) =>{
        e.preventDefault();
        if(addForm.productId !== ''){
            fetchData('http://localhost:3001/basket',{
                method: HttpMethod.POST,
                headers: {
                    'content-type': 'application/json;charset=UTF-8'},
                body: {
                    productId: addForm.productId,
                    count: addForm.count,
                    optionId: addForm.optionId
                }
            })
            return;
        };


    }

    useEffect(()=>{

        if( optionStatus && productStatus === 'fetched'){
            setOptions(optionsFetch!)
            setProduct(productFetch!)

        }
    },[optionsFetch,productFetch])

    return (
        (!user.ok && specialId) || !product

        ?
            <CustomError message='Not found product'></CustomError>

        :

        <div className="singleProduct-container">
            <div className="singleProduct-left">
                <div className="singleProduct-image">
                    <img src={photo} alt=""/>
                </div>
            </div>
            <div className="singleProduct-right">
                <h1 className="singleProduct-title">{product.name}</h1>
                <span className="singleProduct-price">${product.price}</span>
                <p className="singleProduct-description">{product.description}</p>
                <h3 className="singleProduct-choose-addon">Choose additional ingredient</h3>
                <div className="singleProduct-addons">
                    <select name="options" onChange={e => updateAddForm(e.target.value)}>
                        <option value="">None</option>
                        {
                            options.map(option => <option key={option.id} value={option.id} >{option.name}: ${option.price}</option>)
                        }
                    </select>
                </div>
                <div className="singleProduct-add">
                    <h3>Total price: <span className="singleProduct-price">${product.price}</span></h3>
                    <button onClick={addProductToBasket}>Add to Basket</button>
                </div>
            </div>
        </div>
    )


}