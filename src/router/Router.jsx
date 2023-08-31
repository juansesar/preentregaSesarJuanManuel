
import React from 'react'; 
import NavBar from '../components/NavBar';
import ItemListContainer from '../container/ItemListConteiner';
import ItemDetailContainer from '../components/ItemDetailContainer';
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
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:id" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>
    )
}