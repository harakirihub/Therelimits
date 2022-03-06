import { useEffect, useState } from "react"
import ItemDetail from "./ItemDetail"
import bhoodie from "../../../assets/images/bhoodie.svg"
import cargo from "../../../assets/images/cargopants.svg"
import piluso from "../../../assets/images/piluso.svg"
import utilityBag from "../../../assets/images/utilityBag.svg"
import { useParams } from 'react-router-dom'

const productos = [
    {id:1 ,nombre:"Hoodie", precio: "$6000", img: bhoodie},
    {id:2 ,nombre:"Cargo Pants", precio: "$4000", img: cargo},
    {id:3 ,nombre:"Piluso", precio: "$1000", img: piluso},
    {id:4 ,nombre:"Morral Utilitario", precio: "$2000", img: utilityBag}
]


 
function ItemDetailContainer (props) {
    const { id } = useParams()

let requestDatos = new Promise ((resolve, reject)=>{
    setTimeout(()=> {
        const itemFound = productos.find( item =>{
            return item.id === Number (id)
        })
        resolve(itemFound)
    }, 2000)
})
    const [item, setItem] = useState([])
    
    useEffect(
        () =>{
        requestDatos
        .then((datosResolve)=>{
            setItem(datosResolve)})
        .catch((errorReject)=>{
        console.log(errorReject);
        }).finally(()=>{
            console.log("Promise finished")
        })
        
    } )

    return(
        <>
        <div className="container mb-3"> 
       <ItemDetail
            nombre={item.nombre}
            precio={item.precio}
            img={item.img}
            id={item.id}/>
      </div>
        </>
    )
}

export default ItemDetailContainer