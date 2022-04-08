import React from 'react'
import Item from './Item'

function ItemList ({data}) {
  return (
    <>
     
      { data.map((productos) => {
            return <Item item = {productos}/>
        } ) }
    </>
   
    )
}

export default ItemList