import React from 'react';
import CartWidget from '../CartWidget';
import style from './style.module.css';

export const NavBar = () => {
  return (
<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Birreria</a>
    
      <div className={style ['navbar-nav']} >
        <a className="nav-link active" aria-current="page" href="#">productos</a>
        <a className="nav-link" href="#">novedades</a>
        <a className="nav-link" href="#"><CartWidget/></a>
        
      
    </div>
  </div>
</nav>
    );

}
export default NavBar;