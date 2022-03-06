import React from 'react'
import Item from './Item'


function ItemList ({data}) {
  return (
    <>
    
      { data.map((productos) => {
            return <Item
            nombre={productos.nombre}
            precio={productos.precio}
            img={productos.img}
            id={productos.id}
            />
        } ) }
    </>
    )
}

export default ItemList