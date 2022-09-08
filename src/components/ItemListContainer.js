import React from 'react'
import ItemCount from './ItemCount'
import Swal from 'sweetalert2'

const Agregar = (Count) => {
  Swal.fire({
    title: 'Agregado!',
    text: "Se agregaron " + Count + " productos.",
    icon: 'success',
    confirmButtonText: 'Aceptar'
  })
}



function ItemListContainer(props) {
  return (
    <div>
        <h1>{props.greeting.texto}</h1>
        <ItemCount initial={1} stock={4} Agregacarrito={Agregar}/>
    </div>
  )
}

export default ItemListContainer
