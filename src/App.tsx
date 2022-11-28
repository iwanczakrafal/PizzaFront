import React from 'react';
import {HomeView} from "./views/HomeView";
import {ProductView} from "./views/ProductView";
import {Route, Routes} from "react-router-dom";
import {BasketView} from './views/BasketView';
import {LoginView} from "./views/LoginView";
import {RegisterView} from "./views/RegisterView";
import {OrderView} from "./views/OrderView";


export const App = () => {


    return (
            <Routes>
                <Route path="/" element={<HomeView/>}/>
                <Route path="/product/special/:id" element={<ProductView/>}/>
                <Route path="/product/:id" element={<ProductView/>}/>
                <Route path="/basket" element={<BasketView/>}/>
                <Route path="/login" element={<LoginView/>}/>
                <Route path="/register" element={<RegisterView/>}/>
                <Route path="/order/:id" element={<OrderView/>}/>
            </Routes>
    );
}


