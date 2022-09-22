import React, { useEffect, useState } from 'react'
import { products } from '../../assets/productos'
import ItemDetail from './ItemDetail'

function getItem(){
    return new Promise( (resolve) => {
      setTimeout (()=> resolve(products[0]), 2000)
    })
  }

function ItemDetailContainer() {
    const [producto, setProducto] = useState({})
    useEffect(() => {
        getItem().then((respuesta) => {
          setProducto(respuesta)
        })
      },[])
      
  return (
    <div>
       <ItemDetail producto={producto} /> 
    </div>
  )
}

export default ItemDetailContainer