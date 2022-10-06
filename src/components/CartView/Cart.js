import React, { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'
import { Link } from 'react-router-dom'

export const Cart = () => {
  const {cart, total, clear, removeItem} = useContext(CartContext)

  return (
    <>
      {cart.length === 0 ? (
        <h1>
          No se agregaron productos, click<Link to="/">aca</Link> para ver productos.
        </h1>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.product.id}>
              <h1>{item.product.product}</h1>
              <h1>Precio: {item.product.price}</h1>
              <h1>Cantidad: {item.qtyProduct}</h1>
              <button
                onClick={() => {
                  removeItem(item.product.id);
                }}
              >
                Eliminar del Carrito
              </button>
            </div>
          ))}
          <h3>Total: {total.toFixed(2)}</h3>
          <button onClick={clear}>Vaciar Carrito</button>
        </>
      )}
    </>
  );
};