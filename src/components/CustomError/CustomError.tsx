import React from "react";

import "./CustomError.css";

interface Props{
    message:string;
}

export const CustomError = (props: Props) => {
    const {message} = props;


    return (
        <div className="customError-container">
            <h1>Oops...!</h1>
            <h2>{message}</h2>
        </div>


    )
}