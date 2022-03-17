import React from 'react'
import Item from './Item'


function ItemList ({data}) {
  return (
    <>
    <div style={{display:"flex"}} >
      { data.map((productos) => {
            return <Item 
            item = {productos}
            />
        } ) }
    </div>
    </>
    )
}

export default ItemList