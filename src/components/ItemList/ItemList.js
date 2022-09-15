import React from 'react'
import Item from '../Item/Item'

function ItemList({ListProducts}) {
  return (
    <div>
        {ListProducts.map((prod, i) => <Item key={`${prod.products}-${i}`} 
        product={prod} />)}
    </div>
  )
}

export default ItemList