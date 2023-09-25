
import React from 'react'; 
import NavBar from '../components/NavBar';
import ItemListContainer from '../container/ItemListConteiner';
import ItemDetailContainer from '../components/ItemDetailContainer';

import {
    BrowserRouter,
    Routes,
    Route,
    
  } from "react-router-dom";
import { ShopComponentContext } from '../context/shopcontext';
import { CartProvider } from '../context/cartContext';
  
export default function Router () {
    return(
        
      <ShopComponentContext>
        <CartProvider>
        <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:id" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
         <Route path="/Cart" element={<Cart/>} />  
        </Routes>
      </BrowserRouter>
      </CartProvider>
      </ShopComponentContext>
    )
}