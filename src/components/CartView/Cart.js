import React, { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'
import { Link } from 'react-router-dom'

export const Cart = () => {
  const {cart, removeItem} = useContext(CartContext)
if (cart.length == 0) {
  return (<h1>No se agregaron productos, click<Link to="/">acá</Link></h1>)
}

return (
  <>
  <h1>Tu Carrito:</h1>
  {cart ? cart.map (({item}) => (
  <>
  <h1 key={item.id}>{item.product}</h1>
  <button onClick={()=>removeItem(item)}>Borrar</button>
  </>
  )) 
  : "vacio"}
  </>
)
}