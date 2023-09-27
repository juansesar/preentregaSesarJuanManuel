
import React from 'react';
import {CartWidget} from "../CartWidget"

import { Link } from 'react-router-dom';
export const NavBar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
  <Link to="/category/home">BIRRERIA</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
        <Link to="/category/home">Home</Link>
        </li>
        <li class="nav-item">
          <Link to="/category/ofertas">Ofertas</Link>
        </li>
        <li class="nav-item">
        <Link to="/category/novedades">Novedades</Link>
        </li>
        <li class="nav-item">
          <a href="">
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