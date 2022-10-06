import {React, useContext, useState} from 'react'
import ItemCount from '../ItemCount'
import { Link } from 'react-router-dom'
import "./ItemDetail.css"
import { CartContext } from '../../Context/CartContext'


function ItemDetail({ producto }) {
    const [elimBtn, setElimBtn] = useState(false)
    const {cart,addItem} = useContext(CartContext)
    const onAdd = (Count) => {
      addItem(producto, Count)
      setElimBtn(true)
    }
    console.log(cart);
  return (
    <div className="card">
      <div className="card-img">
        <img src={producto.image} alt="imagen" />
      </div>
      <div className="card-detail">
        <h2>{producto.product}</h2>
        <p>{producto.category}</p>
        <h3>$ {producto.price}</h3>
        {elimBtn ? (
          <div className="count">
          <Link to="/cart">
          <button>Terminar compra!</button>
          </Link>
          <Link to="/">
          <button>Seguir comprando!</button>
          </Link>
        </div>
        ) : (
          <ItemCount initial={1} stock={4} onAdd={onAdd} />
        )}
      </div>
    </div>
  )
}

export default ItemDetail