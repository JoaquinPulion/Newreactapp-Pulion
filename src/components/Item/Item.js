import React from 'react'
import { Link } from 'react-router-dom'
import "./Item.css"

function Item({product}) {
    console.log(product);
  return (
    <Link to={`/detail/${product.id}`} >
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
    </Link>
  )
}

export default Item