
import React from 'react'; 
import NavBar from '../components/NavBar';
import ItemListConteiner from '../container/ItemListConteiner';

import {
    BrowserRouter,
    Routes,
    Route,
    Link
  } from "react-router-dom";
  
export default function Router () {
    return(
        <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<ItemListConteiner />} />
          <Route path="/category/:id" element={<ItemListConteiner />} />
          
        </Routes>
      </BrowserRouter>
    )
}