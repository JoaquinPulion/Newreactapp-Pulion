import { createContext, useState } from "react";

 export const CartContext = createContext()

function CartProvider({children}) {
  const [cart, setCart] = useState ([])

  const addItem = (item, quantity) => {
    const existItem = cart.findIndex(itemCart =>itemCart.item.id == item.id)
    if (existItem!== 1) {
      const newCart = cart.filter(item => item !== cart [existItem])
      setCart([{item,quantity}, ...newCart])
    } else {
      setCart([...cart,{item,quantity}])
    }
  }
  const removeItem = (item) => {
    const newCart = cart.filter(oldItem => 
       oldItem.item !== item
      
      )
    setCart([...newCart])
  }
  const clear = (item) => {
    setCart([])
  }
  return (
    <CartContext.Provider
    value={{ cart, addItem, removeItem, clear }}
    >{children}</CartContext.Provider>
  )
}

export default CartProvider