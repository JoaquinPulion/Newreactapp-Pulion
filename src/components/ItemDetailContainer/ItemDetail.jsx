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
  return (
    <div style={styles.container}>
      <div style={styles.imagen}>
        <img style={styles.ima} src={producto.image} alt="imagen" />
      </div>
      <div style={styles.detail}>
        <h2>{producto.product}</h2>
        <p>{producto.category}</p>
        <h3>$ {producto.price}</h3>
        {elimBtn ? (
          <div className="count">
          <Link to="/cart">
          <button style={styles.buttonAddd}>Terminar compra!</button>
          </Link>
          <Link to="/">
          <button style={styles.buttonAddd}>Seguir comprando!</button>
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

const styles = {
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  detail: {
    display: "flex",
    flexDirection: "column",
  },
  imagen: {
    position: "relative",
    display: "flex",
    justifycontent: "center",
    alignitems: "center",
    transition: "0.5s",
  },
  ima: {
    minwidth: "500px",
    width: "500px",
    height: "100%",
  },
  buttonAddd:{
    width: '80%',
    height: '50px',
    borderRadius: '50%',
    color: 'black',
    fontSize: '18px',
    backgroundColor: 'yellow',
    margin: '10px',
    fontWeight: "bold",
    cursor: "pointer"
  },
};