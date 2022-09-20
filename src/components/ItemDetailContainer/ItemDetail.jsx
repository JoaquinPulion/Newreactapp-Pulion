import React from 'react'
import "../Item/Item.css"

function ItemDetail({product}) {
    console.log(product);
  return (
    <div className="card">
      <div className="card-img">
        <img src={product.image} alt="imagen" />
      </div>
      <div className="card-detail">
        <h2>{product.product}</h2>
        <p>{product.category}</p>
        <h3>$ {product.price}</h3>
        <button>Ver más</button>
      </div>
    </div>
  )
}

export default ItemDetail