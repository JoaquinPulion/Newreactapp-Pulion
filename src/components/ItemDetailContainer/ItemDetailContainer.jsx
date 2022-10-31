import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
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
      },[id])
      
  return (
    <div>
       <ItemDetail producto={producto} /> 
    </div>
  )
}

export default ItemDetailContainer