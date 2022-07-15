import React, { useState } from 'react';
import {HomeView} from "./views/HomeView";
import {ProductView} from "./views/ProductView";
import {Route, Routes} from "react-router-dom";
import {BasketView} from './views/BasketView';
import {LoginView} from "./views/LoginView";
import {RegisterView} from "./views/RegisterView";
import { UserContext } from './contexts/user.context';


export const App = () => {
    const [user, setUser] = useState({})
    console.log(user)
    return (
        <UserContext.Provider value={{user, setUser}}>
            <Routes>
                <Route path="/" element={<HomeView/>}/>
                <Route path="/product/:id" element={<ProductView/>}/>
                <Route path="/basket" element={<BasketView/>}/>
                <Route path="/login" element={<LoginView/>}/>
                <Route path="/register" element={<RegisterView/>}/>
            </Routes>
        </UserContext.Provider>


    );
}


