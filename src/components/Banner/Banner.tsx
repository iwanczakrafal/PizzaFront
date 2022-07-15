import React from "react";


import "./Banner.css"

interface Props {
    item: {
        id: number;
        title: string;
        description: string;
        img: string;
    }
}

export const Banner = (props: Props) => {
    const {img, title, description}= props.item;

    return (
        <div className="banner-container">
            <div className="banner-info">
                <h1>{title}</h1>
                <p>{description}</p>
            </div>
            <div className="banner-image">
                <img src={img} alt='banner'/>
            </div>
        </div>

    )
}