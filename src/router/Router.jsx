
import React from 'react'; 
import NavBar from '../components/NavBar';

import ItemDetailContainer from '../components/ItemDetailContainer';

import {
    BrowserRouter,
    Routes,
    Route,
    
  } from "react-router-dom";

import Cart from '../components/Cart/cart';
import { CartComponentContext } from '../components/context/CartContext';
import ItemListContainer from '../components/container/ItemListConteiner';

export default function Router () {
    return(
        
     
        <CartComponentContext>
        <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:id" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
         <Route path="/cart" element={<Cart/>} />  
        </Routes>
      </BrowserRouter>
      </CartComponentContext>
     
    )
}