import React, {useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";
import {ProductItemInterface} from 'types';

import "./SingleProduct.css";

export const SingleProduct = () => {
    // @TODO: TUTAJ OGARNAC DALEJ
    const user = JSON.parse(localStorage.getItem('user') as string)
    const location = useLocation();
    const id = location.pathname.split("/")[user ? 3:2];

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
    const [photo, setPhoto] = useState<string>('');

    const [addForm, setAddForm] = useState({
        productId: id,
        count: 1,
        optionId: ''
    });


    const updateAddForm = (value: string) => {
        setAddForm({
            ...addForm,
            optionId: value
        })

    }

    const addProductToBasket = () =>{
        (async () => {
            try {
                const res = await fetch("http://localhost:3001/basket", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        addForm
                    }),
                });

                const data = await res.json();



            } catch (err) {
            }
        })();
    }

    useEffect(() => {
        (async () => {
            try {
                const res = await fetch(user?`http://localhost:3001/product/special/${id}`:`http://localhost:3001/product/${id}`);
                const resOptions = await fetch("http://localhost:3001/option");
                const resPhoto = await fetch(`http://localhost:3001/product/photo/${id}`);

                const data = await res.json();
                const dataOptions = await resOptions.json();

                setProduct(data);
                setPhoto(resPhoto.url)
                setOptions(dataOptions)
            } catch (err) {
            }
        })();
    }, [id]);


    return (
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
                    <select name="options" defaultValue="" id="" onChange={e => updateAddForm(e.target.value)}>
                        <option value="" selected>None</option>
                        {options.map(option => <option key={option.id} value={option.id} >{option.name}: ${option.price}</option>)}
                    </select>
                </div>
                <div className="singleProduct-add">
                    <h3>Total price: <span className="singleProduct-price">${product.price}</span></h3>
                    <button>Add to Basket</button>
                </div>
            </div>
        </div>
    )


}