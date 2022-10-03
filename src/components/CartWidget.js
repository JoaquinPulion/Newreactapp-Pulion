import React, { useContext } from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import { CartContext } from '../Context/CartContext';


function CartWidget() {
  const {cart} = useContext(CartContext)
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