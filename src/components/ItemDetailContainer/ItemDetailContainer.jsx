import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { products } from '../../assets/productos'
import ItemDetail from './ItemDetail'
import { db } from "../../Firebase/firebase"
import { doc, getDoc, collection } from "firebase/firestore"

const getItem = (data, stalltime = 0, id) => {
  return new Promise ((resolve, reject) =>
  setTimeout(() => {
    try {
      if (data) {
        if (id) {
          const prod = data.find((producto) => producto.id === id)
          resolve(prod)
        }else {
          resolve(data)
        }
      }
    } catch (err) {
      reject (err)
    }
    }, stalltime),
  )
}

function ItemDetailContainer() {
    const [producto, setProducto] = useState({})
    const { id } = useParams()
    console.log(id);
    useEffect(() => {
      const prodCollection = collection(db, "listproducts")
      const refDoc = doc(prodCollection, id)
      getDoc(refDoc)
      .then ((result) => {
        setProducto(
          {
            id: result.id,
            ...result.data(),
          }
        )
      }
      )

        /*getItem(products, 2000, parseInt(id)).then((respuesta) => {
          setProducto(respuesta)
        })*/
      },[id])
      
  return (
    <div>
       <ItemDetail producto={producto} /> 
    </div>
  )
}

export default ItemDetailContainer

/* function getItem(){
  return new Promise( (resolve) => {
    setTimeout (()=> resolve(products[0]), 2000)
  })
}*/