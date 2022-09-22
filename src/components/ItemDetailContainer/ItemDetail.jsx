import React from 'react'
import "../Item/Item.css"

function ItemDetail({product, price, image, category}) {
    console.log(product);
  return (
    <div className="card">
      <div className="card-img">
        <img src={image} alt="imagen" />
      </div>
      <div className="card-detail">
        <h2>{product}</h2>
        <p>{category}</p>
        <h3>$ {price}</h3>
        <button>Ver más</button>
      </div>
    </div>
  )
}

export default ItemDetail