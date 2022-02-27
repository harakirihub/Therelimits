import Item from "./Item"
import { useEffect, useState } from "react"

function ItemListContainer (props)
{

const productos = [
    {nombre: 'Hoodie', precio: 6000},
    {nombre: 'Cargo Pants', precio: 4000},
    {nombre: 'Piluso', precio: 1000},
    {nombre: 'Rinionera', precio: 2000}
]


useEffect( () => {
    getProducts()
    console.log('se ejecutó el efecto');
    return () => {
        console.log('Limpieza al unmount');
     }
}, [] )

const getProducts = () => { 
    const getProductsPromise = new Promise( (resolve, reject) => {
      setTimeout(() => {
          resolve(productos)
      }, 5000);
    })

    getProductsPromise.then( response => {
        console.log(response);
    })
 }

    return(
        <>
        <h3>{props.name} </h3>

        <div>
            <Item producto = { productos [0]}>
                <strong> Sudadera, buzo con capucha </strong>
            </Item>
            <Item producto = { productos [1]}>
                <strong> Pantalones tacticos </strong>
            </Item>
            <Item producto = { productos [2]}>
                <strong> Gorro piluso pezcador  </strong>
            </Item>
            <Item producto = { productos [3]}>
                <strong> Riñonera con cierre </strong>
            </Item>
        </div>
        </>
    )
}

export default ItemListContainer