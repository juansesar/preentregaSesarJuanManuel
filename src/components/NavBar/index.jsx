import React from 'react';
import CartWidget from '../CartWidget';
import style from './style.module.css';

export const NavBar = () => {
  return (
<nav className={style['nav']}>
  <div className={style["logo"]}>
    <a href="#">Birreria</a>
  </div>
  <div className={style["navegador"]} >
    <a href="#">productos</a>
    <a href="#">novedades</a>
    <a href="#"><CartWidget/></a> 
  </div>
 
</nav>
    );

}
export default NavBar;