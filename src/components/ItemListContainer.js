import React from 'react'
import { products } from '../assets/productos'
import { customFetch } from '../utils/customFetch'
import { useState, useEffect } from 'react'
import ItemList from './ItemList/ItemList'
import { useParams } from 'react-router-dom'




function ItemListContainer(props) {

  let {IdCategoria} = useParams()
  console.log();

  const [listProducts, setListProducts] = useState ([])

  

  useEffect(() => {
    const URL= IdCategoria ? `${products.category}${IdCategoria}` : products
    customFetch(URL)
      .then (res => setListProducts(res))
  },[IdCategoria])



  return (
    <div>
        <h1>{props.greeting.texto}</h1>
       
        <ItemList ListProducts={listProducts} />
    </div>
  )
}

export default ItemListContainer
