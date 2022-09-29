import React from 'react'


function ItemCount({ stock, initial, onAdd}) {
    
    const [Count, setCount] = React.useState(initial)

    const handleIncrement= () => {
            if (Count < stock) {
              setCount(Count+1)
            }
    }

    const handleDecrement= () => {
      if (Count > initial) {
        setCount(Count-1)
      }
    }

    const Agregaralcarrito = (Count) => {
        onAdd(Count)
        setCount(1)
    }
    
  return (
    <div>
    <h3>Seleccione cantidad</h3>
    <h4>Stock: {Count}</h4>
    <button onClick={handleIncrement}>Sumar</button>
    <button onClick={handleDecrement}>Restar</button>
    <button onClick={()=> Agregaralcarrito(Count)}>Agregar al carrito</button>
    </div>
  )
}

export default ItemCount