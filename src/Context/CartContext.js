import { createContext, useState } from "react";

 export const CartContext = createContext()

function CartProvider({children}) {
  const [cart, setCart] = useState ([])
  const [qty, setQty] = useState(0)
  const [total, setTotal] = useState(0)

  const addItem = (product, qtyProduct) => {
    if (isInCart(product.id)) {
      setCart(
        cart.map((item) => {
          if (item.product.id === product.id) {
            return {
              product: item.product,
              qtyProduct: item.qtyProduct + qtyProduct,
            }
          }
          return item;
        })
      )
    } else {
      setCart([...cart,{product, qtyProduct}])
    }
    setQty(qty + qtyProduct);
    setTotal(total + ( qtyProduct * product.price ));
  }
  const removeItem = (id) => {
    const productCart = cart.find((item)=>item.product.id === id)
    setCart(
      cart.filter((item) => {
        return item.product.id !== id
      })
    )
    setQty(qty - productCart.qtyProduct);
    setTotal(total - ( productCart.qtyProduct * productCart.product.price))
  }

  const isInCart = (id) => cart.some((item) => item.product.id === id);

  const clear = (item) => {
    setCart([])
    setQty(0)
    setTotal(0)
  }
  return (
    <CartContext.Provider
    value={{ cart, qty, total, addItem, removeItem, clear }}
    >{children}</CartContext.Provider>
  )
}

export default CartProvider