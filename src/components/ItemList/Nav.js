import { Block } from '@mui/icons-material';
import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const categorias = [
    { id: 0, nombre: "Remeras", ruta:"/categoria/Remeras"},
    { id: 1, nombre: "Buzos", ruta:"/categoria/Buzos"},
    { id: 2, nombre: "Jeans", ruta:"/categoria/Jeans"},
  ];

export const Nav = ({ categorias }) => {
  return (
    <nav>
        {categorias.map((categoria) => {
                return <NavLink key={categoria.id} to={categoria.ruta} style={styles.links}>{categoria.nombre}</NavLink>
            })}
    </nav>
  )
}


const styles = {
    links: {
        textdecoration: "none",
        display: "inline-block",
        margin: "0 100px",
        color: "rgb(234, 219, 92)",
    }
}
