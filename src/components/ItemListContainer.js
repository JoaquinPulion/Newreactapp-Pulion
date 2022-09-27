import React from 'react'
import ItemCount from './ItemCount'
import Swal from 'sweetalert2'
import { products } from '../assets/productos'
import { customFetch } from '../utils/customFetch'
import { useState, useEffect } from 'react'
import ItemList from './ItemList/ItemList'
import { useParams } from 'react-router-dom'

const Agregar = (Count) => {
  Swal.fire({
    title: 'Agregado!',
    text: "Se agregaron " + Count + " productos.",
    icon: 'success',
    confirmButtonText: 'Aceptar'
  })
}



function ItemListContainer(props) {

  let {IdCategoria} = useParams()
  console.log(IdCategoria);

  const [listProducts, setListProducts] = useState ([])

  useEffect(() => {
    customFetch(products)
      .then (res => setListProducts(res))
  },[])



  return (
    <div>
        <h1>{props.greeting.texto}</h1>
        <ItemCount initial={1} stock={4} Agregacarrito={Agregar}/>
        <ItemList ListProducts={listProducts} />
    </div>
  )
}

export default ItemListContainer
