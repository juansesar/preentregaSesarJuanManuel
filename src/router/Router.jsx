import React from 'react'; 
import NavBar from '../components/NavBar';
import ItemDetailContainer from '../components/ItemDetailContainer';
import {
    BrowserRouter,
    Routes,
    Route,
    
  } from "react-router-dom";
import Cart from '../components/Cart/cart';
import { CartComponentContext } from '../context/CartProvider';
import ItemListContainer from '../components/container/ItemListConteiner';
import Checkout from '../components/checkout';

export default function Router () {
    return(
        
     
        <CartComponentContext>
        <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
         <Route path="/cart" element={<Cart/>} />  
         <Route path="/checkout" element={<Checkout/>}/>
        </Routes>
      </BrowserRouter>
      </CartComponentContext>
     
    )
}