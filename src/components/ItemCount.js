import React from 'react'

function ItemCount(props) {
    console.log(props.stock);
    const [Count, setCount] = React.useState(1)

    const handleIncrement= () => {
            if (Count < props.stock) {
              setCount(Count+1)
            }
    }

    const handleDecrement= () => {
      if (Count > props.initial) {
        setCount(Count-1)
      }
    }

    const Agregaralcarrito = () => {
        props.Agregacarrito(Count)
        setCount(Count)
    }
    
  return (
    <div>
    <h1>ItemCount</h1>
    <h3>Stock: {Count}</h3>
    <button onClick={handleIncrement}>Sumar</button>
    <button onClick={handleDecrement}>Restar</button>
    <button onClick={Agregaralcarrito}>Agregar al carrito</button>
    </div>
  )
}

export default ItemCount