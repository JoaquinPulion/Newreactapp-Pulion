import React from 'react'
import triangulo from "../assets/triangulo.png"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CartWidget from './CartWidget';
import "./NavBar.css"

function NavBar() {
  return (
    <header>
      <img src={triangulo} alt='logo' />
      <nav>
      <a href=''>Buzos</a>
      <a href=''>Remeras</a>
      <a href=''>Jeans</a>
      </nav>
      <CartWidget/>
    </header>
  )
}

export default NavBar