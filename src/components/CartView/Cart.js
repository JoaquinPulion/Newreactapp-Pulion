import React, { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'
import { Link } from 'react-router-dom'
import { db } from "../../Firebase/firebase"
import { collection, addDoc, serverTimestamp, doc, updateDoc } from "firebase/firestore"

export const Cart = () => {
  const {cart, total, clear, removeItem} = useContext(CartContext)

  const comprador = {
    nombre: "Ricardo",
    apellido: "Suarez",
    email:"ricardosuarez@gmail.com"
  };

  const finalizarCompra = ()=>{
    const ventasCollection = collection(db,"sales");
    addDoc(ventasCollection, {
      comprador,
      items: cart,
      date: serverTimestamp(),
      total,
    })
    .then(result=>{
      cart.forEach(producto => {
        actualizarStock(producto);
      });
      clear();
    })
  }

  const actualizarStock = (producto) =>{
    const updateStock = doc(db, "listproducts", producto.id);
    updateDoc(updateStock,{stock:(producto.product.stock - producto.qtyProduct)});
  }

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
          <button onClick={finalizarCompra}>Finalizar Compra</button>
        </>
      )}
    </>
  );
};