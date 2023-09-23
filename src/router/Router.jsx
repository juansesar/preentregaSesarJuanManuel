
import React from 'react'; 
import NavBar from '../components/NavBar';
import ItemListContainer from '../container/ItemListConteiner';
import ItemDetailContainer from '../components/ItemDetailContainer';
import Carrito from '../components/Carrito';
import {
    BrowserRouter,
    Routes,
    Route,
    
  } from "react-router-dom";
import { ShopComponentContext } from '../context/shopcontext';

  
export default function Router () {
    return(
        
      <ShopComponentContext>
        <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:id" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/item/:id" element={<Carrito/>} /> 
        </Routes>
      </BrowserRouter>
      </ShopComponentContext>
    )
}