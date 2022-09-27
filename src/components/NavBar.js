import React from 'react'
import triangulo from "../assets/triangulo.png"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CartWidget from './CartWidget';
import "./NavBar.css"
import { Nav } from './ItemList/Nav';
import { Link, NavLink } from 'react-router-dom'

function NavBar() {
  const categorias = [
    { id: 0, nombre: "Remeras", ruta:"/categoria/Remeras"},
    { id: 1, nombre: "Buzos", ruta:"/categoria/Buzos"},
    { id: 2, nombre: "Jeans", ruta:"/categoria/Jeans"},
  ];
  return (
    <header>
      <Link to={"/"}><img src={triangulo} alt='logo' /></Link>
      <Nav categorias={categorias} />
      <Link to="/cart"><CartWidget/></Link>
    </header>
  )
}

export default NavBar