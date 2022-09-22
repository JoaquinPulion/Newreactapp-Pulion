import React from 'react'
import "../Item/Item.css"

function ItemDetail({ producto }) {
    console.log(producto);
  return (
    <div className="card">
      <div className="card-img">
        <img src={producto.image} alt="imagen" />
      </div>
      <div className="card-detail">
        <h2>{producto.product}</h2>
        <p>{producto.category}</p>
        <h3>$ {producto.price}</h3>
        <button>Ver más</button>
      </div>
    </div>
  )
}

export default ItemDetail