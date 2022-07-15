import React from "react";

import "./Footer.css";


export const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footer-image">
                <img src="/img/bg.png"  alt="" />
            </div>
            <div className="footer-wrapper">
                <div className="footer-card">
                    <h2 className="footer-motto">
                        OH YES, WE DID. THE BROPIZZA, WELL BAKED SLICE OF PIZZA.
                    </h2>
                </div>
                <div className="footer-card">
                    <h1 className="footer-title">FIND OUR RESTAURANTS</h1>
                    <p className="footer-text">
                        ul. Wolnego 4
                        <br /> Katowice 40-857
                    </p>
                    <p className="footer-text">
                        al. Wojciecha Korfantego 51
                        <br /> Katowice 40-857
                    </p>
                </div>
                <div className="footer-card">
                    <h1 className="footer-title">WORKING HOURS</h1>
                    <p className="footer-text">
                        MONDAY UNTIL FRIDAY
                        <br /> 9:00 – 22:00
                    </p>
                    <p className="footer-text">
                        SATURDAY - SUNDAY
                        <br /> 12:00 – 24:00
                    </p>
                </div>
            </div>
        </div>
    )
};