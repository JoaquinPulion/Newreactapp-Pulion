import React from 'react'
import { useState, useEffect } from 'react'
import ItemList from './ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { db } from "../../src/Firebase/firebase"
import { getDocs, collection, query, where } from "firebase/firestore"

function ItemListContainer(props) {
  let {IdCategoria} = useParams()
  const [listProducts, setListProducts] = useState ([])
  const productsRef = collection (db, "listproducts")

  useEffect(() => {
    async function fetchData (IdCategoria) {
      const prodcutsQuery = !IdCategoria
      ? productsRef
      : query (productsRef, where ("category","==", IdCategoria))
    
    const response = await getDocs (prodcutsQuery)
    const products = response.docs.map((product) => {
      return { ...product.data(), id: product.id}
    })
    setListProducts(products)
    }
  fetchData(IdCategoria)
  }, [IdCategoria])
  return (
    <div>
        <h1>{props.greeting.texto}</h1>
       
        <ItemList ListProducts={listProducts} />
    </div>
  )
}

export default ItemListContainer
