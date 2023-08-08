
import './App.css';
import React from 'react'; 
import NavBar from './components/NavBar';
import ItemListConteiner from './container/ItemListConteiner';
import style from "./App.css"

function App() {
  return (
    <div>
    <NavBar/>
    <ItemListConteiner/>
    </div>

  );
}

export default App;
