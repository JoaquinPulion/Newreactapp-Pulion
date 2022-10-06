import React, { useContext } from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { CartContext } from '../Context/CartContext';


function CartWidget() {
  const { qty } = useContext(CartContext)
  return (
    <div>
      <ShoppingCartIcon color="yellow" fontSize="large" />
      {qty > 0 && <p>{qty}</p>}
    </div>
  )
}

export default CartWidget