import React from 'react'
import triangulo from "../assets/triangulo.png"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import "./NavBar.css"

function NavBar() {
  return (
    <header>
      <img src={triangulo} alt='logo' />
      <nav>
      <a href=''>Categoria 1</a>
      <a href=''>Categoria 2</a>
      <a href=''>Categoria 3</a>
      </nav>
      <ShoppingCartIcon color='primary'/>
    </header>
  )
}

export default NavBar