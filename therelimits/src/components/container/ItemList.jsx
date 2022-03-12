import React from 'react'
import Item from './Item'


function ItemList ({data}) {
  return (
    <>
    <div style={{display:"flex"}} >
      { data.map((productos) => {
            return <Item 
            nombre={productos.nombre}
            precio={productos.precio}
            img={productos.img}
            id={productos.id}
            />
        } ) }
    </div>
    </>
    )
}

export default ItemList