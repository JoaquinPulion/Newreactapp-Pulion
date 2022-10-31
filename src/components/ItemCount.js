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
    <div>
    <h3>Seleccione cantidad</h3>
    <h4>Stock: {Count}</h4>
    <button style={styles.button} onClick={handleIncrement}>+</button>
    <button style={styles.button} onClick={handleDecrement}>-</button>
    </div>
    <button style={styles.buttonAdd} onClick={()=> Agregaralcarrito(Count)}>Agregar al carrito</button>
    </div>
  )
}

export default ItemCount

const styles = {
  button:{
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    color: 'white',
    fontSize: '15px',
    backgroundColor: 'black',
    margin: '10px',
    cursor: "pointer"
  },
  buttonAdd:{
    width: '60%',
    height: '50px',
    borderRadius: '50%',
    color: 'black',
    fontSize: '18px',
    backgroundColor: 'yellow',
    margin: '10px',
    fontWeight: "bold",
    cursor: "pointer"
  }
};