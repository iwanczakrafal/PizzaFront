import React, {FormEvent, useState} from "react";
import {CreditCardOutlined} from "@material-ui/icons";
import {AttachMoneyOutlined} from "@material-ui/icons";

import "./OrderForm.css";


interface Props {
    setOrder: React.Dispatch<React.SetStateAction<boolean>>
}

export const OrderForm = (props: Props) => {

    const [payment, setPayment] = useState(false)

    const [form, setForm] = useState({
        name: '',
        surname: '',
        phone: '',
        street: '',
        streetNumber: '',
        apartmentNumber: '',
        floor: '',
        email: '',
        paymentMethod: 'online',
    });


    const updateForm = (key: string, value: any) => {
        setForm({
            ...form,
            [key]: value,
        })
    }


    const order = async (e: FormEvent) => {

    }

    return (
        <div className="orderForm-container">
            <div className="orderForm-wrapper">
                <span className="orderForm-closeBtn" onClick={() => props.setOrder(false)}>&times;</span>
                <form className="orderForm" onSubmit={order}>
                    <h2>Contact details</h2>
                    <div className="orderForm-item">
                        <label>
                            <input
                                type="text"
                                name="name"
                                required
                                placeholder="Name"
                                value={form.name}
                                onChange={e => updateForm("name", e.target.value)}
                            />
                        </label>
                        <label>
                            <input
                                type="text"
                                name="surname"
                                required
                                placeholder="Surname"
                                value={form.surname}
                                onChange={e => updateForm("surname", e.target.value)}
                            />
                        </label>
                        <label>
                            <input
                                type="tel"
                                name="phone"
                                required
                                placeholder="Phone"
                                value={form.phone}
                                onChange={e => updateForm("phone", e.target.value)}
                            />
                        </label>
                        <label>
                            <input
                                type="email"
                                name="email"
                                required
                                placeholder="E-mail"
                                value={form.email}
                                onChange={e => updateForm("email", e.target.value)}
                            />
                        </label>
                    </div>
                    <h2>Order address</h2>
                    <div className="orderForm-item">
                        <label>
                            <input
                                type="text"
                                name="street"
                                required
                                placeholder="Street"
                                value={form.street}
                                onChange={e => updateForm("street", e.target.value)}
                            />
                        </label>
                        <label>
                            <input
                                type="text"
                                name="streetNumber"
                                required
                                placeholder="Street number"
                                value={form.streetNumber}
                                onChange={e => updateForm("streetNumber", e.target.value)}
                            />
                        </label>
                        <label>
                            <input
                                type="number"
                                name="apartmentNumber"
                                placeholder="Apartment number"
                                min={1}
                                value={form.apartmentNumber}
                                onChange={e => updateForm("apartmentNumber", e.target.value)}
                            />
                        </label>
                        <label>
                            <input
                                type="number"
                                name="floor"
                                min={0}
                                placeholder="Floor"
                                value={form.floor}
                                onChange={e => updateForm("floor", e.target.value)}
                            />
                        </label>

                    </div>
                    <h2>Payment type</h2>
                    <div className="orderForm-item">
                        <label>
                            <div className={payment ? "orderForm-payment , orderForm-paymentSelected" : "orderForm-payment"}
                                 onClick={() => {
                                     updateForm('paymentMethod', 'cash');
                                     setPayment(!payment)
                                 }}>
                                <span>
                                    <AttachMoneyOutlined fontSize="large"/>
                                </span>
                                <p>Cash</p>
                            </div>
                        </label>
                        <label>
                            <div className={payment ? "orderForm-payment" : "orderForm-payment , orderForm-paymentSelected"}
                                 onClick={() => {
                                     updateForm('paymentMethod', 'online');
                                     setPayment(!payment)
                                 }}>
                                <span>
                                    <CreditCardOutlined fontSize="large"/>
                                </span>
                                <p>Online</p>
                            </div>
                        </label>
                    </div>
                    <button className="orderForm-btn">{form.paymentMethod === 'online' ? 'Order and Pay': 'Order' }</button>
                </form>
            </div>
        </div>
    )


}