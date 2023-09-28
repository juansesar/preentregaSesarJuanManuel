
import React from 'react';
import {CartWidget} from "../CartWidget"
import style from "./style.module.css"
import { Link } from 'react-router-dom';
export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
  <Link className={style['birreria']} to="/category/home">BIRRERIA</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
        <Link className={style['links']} to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className={style['links']}  to="category/oferta">Ofertas</Link>
        </li>
        <li className="nav-item">
        <Link className={style['links']} to="category/novedades">Novedades</Link>
        </li>
        <li className="nav-item">
          <a className={style['links']} href="">
          <CartWidget/>
          </a>
        </li>
      </ul>
    </div>
  </div>
</nav>

  )

}
export default NavBar;