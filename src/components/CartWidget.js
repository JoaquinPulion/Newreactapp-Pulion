import React, { useContext } from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import { CartContext } from '../Context/CartContext';


function CartWidget() {
  const {cart} = useContext(CartContext)
  if (cart.length == 0) {
    return (
    <>
      <ShoppingCartIcon color='primary'/>
      </>
      )
  }
  return (
    <>
    <ShoppingCartIcon color='primary'/>
    <span className='cartcount'>
      {cart.length}
    </span>
    </>
  )
}

export default CartWidget