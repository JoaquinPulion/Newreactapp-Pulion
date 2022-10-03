import React, { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'

export const Cart = () => {
  const {cart, removeItem} = useContext(CartContext)
  return (
    <>
    <div>Cart</div>
    {cart ? cart.map (({item}) => 
    <>
    <h1 key={item.id}>{item.product}</h1>
    <button onClick={()=>removeItem(item)}>Borrar</button>
    </>
    ) 
    : "vacio"}
    </>
  )
}
