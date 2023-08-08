import React from 'react';
import CartWidget from '../CartWidget';
import style from './style.module.css';

export const NavBar = () => {
  return (
<nav >
  <div className="logo">
    <a href="#">Birreria</a>
      <div className="navegador" >
        <a href="#">productos</a>
        <a href="#">novedades</a>
        <a href="#"><CartWidget/></a> 
    </div>
  </div>
</nav>
    );

}
export default NavBar;