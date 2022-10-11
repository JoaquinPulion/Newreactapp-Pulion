import React from 'react'
import { products } from '../assets/productos'
import { customFetch } from '../utils/customFetch'
import { useState, useEffect } from 'react'
import ItemList from './ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { db } from "../../src/Firebase/firebase"
import { getDocs, collection, query, where } from "firebase/firestore"

function ItemListContainer(props) {

  let {IdCategoria} = useParams()
  console.log();

  const [listProducts, setListProducts] = useState ([])

  

  useEffect(() => {
    const prodCollection = collection(db, "listproducts")
    const qry = query(prodCollection, where("category", "==", "Jeans"))
    getDocs(prodCollection)
    .then((data)=>{
      const lista = data.docs.map ((product)=>{
        return {
          ...product.data(),
          id: product.id
        }
      })
      setListProducts(lista)
    })


    /*const URL= IdCategoria ? `${products.category}${IdCategoria}` : products
    customFetch(URL)
      .then (res => setListProducts(res))*/
  },[IdCategoria])



  return (
    <div>
        <h1>{props.greeting.texto}</h1>
       
        <ItemList ListProducts={listProducts} />
    </div>
  )
}

export default ItemListContainer
