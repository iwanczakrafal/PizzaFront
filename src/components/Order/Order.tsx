import React from "react";

import "./Order.css";

export const Order = () => {

    const paymentStatus = 1;
    const status = 0;

    const statusClassName = (index: number) => {
        if (index - status < 1) return "order-statusDone";
        if (index - status === 1) return "order-statusInProgress";
        if (index - status > 1) return "order-statusUndone";
    };


    return (

        <div className="order-container">
            <h1>Thank you for order! You can expect delivery in about 90 minutes</h1>
            <div className="order-wrapper">
                <div className={paymentStatus ? statusClassName(0) : "order-statusInProgress"}>
                    <img className="order-statusImg" src="/img/paid.png" alt=""/>
                    <span>Payment</span>
                    <div className="order-checked">
                        <img className="order-checkedImg" src="/img/checked.png" alt=""/>
                    </div>
                </div>
                <div className={paymentStatus ? statusClassName(1) : "order-statusUndone"}>
                    <img className="order-statusImg" src="/img/preparing.png" alt=""/>
                    <span>Preparing</span>
                    <div className="order-checked">
                        <img src="/img/checked.png" alt=""/>
                    </div>
                </div>
                <div className={statusClassName(2)}>
                    <img className="order-statusImg" src="/img/bike.png" alt=""/>
                    <span>On the way</span>
                    <div className="order-checked">
                        <img src="/img/checked.png" alt=""/>
                    </div>
                </div>
                <div className={statusClassName(3)}>
                    <img className="order-statusImg" src="/img/delivered.png" alt=""/>
                    <span>Delivered</span>
                    <div className="order-checked">
                        <img src="/img/checked.png" alt=""/>
                    </div>
                </div>
            </div>


        </div>
    )
}