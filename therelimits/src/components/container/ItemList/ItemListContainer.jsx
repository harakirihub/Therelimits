
import { useEffect, useState } from "react"
import ItemList from "./ItemList"
import bhoodie from "../../../assets/images/bhoodie.svg"
import cargo from "../../../assets/images/cargopants.svg"
import piluso from "../../../assets/images/piluso.svg"
import utilityBag from "../../../assets/images/utilityBag.svg"
import { useParams } from 'react-router-dom'

const productos = [
    {id:1 ,nombre:"Hoodie", precio: "$6000", img: bhoodie, stock:8},
    {id:2 ,nombre:"Cargo Pants", precio: "$4000", img: cargo, stock:8},
    {id:3 ,nombre:"Piluso", precio: "$1000", img: piluso, stock:8},
    {id:4 ,nombre:"Morral Utilitario", precio: "$2000", img: utilityBag, stock:8}
]

function obtenerDatos(categoryid) {
    return new Promise ((resolve,reject)=>{
        
        setTimeout(()=>{
            if (categoryid === undefined){
                resolve(productos)
                } else {
                const categoryFound = productos.find ( item =>{
                    return item.nombre === categoryid
                })
                resolve(categoryFound)
                }
        }, 2000)
    } )
}
 
function ItemListContainer (props) {
    const { categoryid } = useParams()
    const [items, setItems] = useState([])
    
    
    useEffect(
        () =>{
        let requestDatos = obtenerDatos(categoryid)
        requestDatos
        .then((datosResolve)=>{
            setItems(datosResolve)})
        .catch((errorReject)=>{
        console.log(errorReject);
        }).finally(()=>{
            console.log("Promise finished")
        })
        
    } )

    return(
        <> 
        <div>
        {props.name}
       <ItemList data={items} />
      
        </div>    
        </>
    )
}

export default ItemListContainer