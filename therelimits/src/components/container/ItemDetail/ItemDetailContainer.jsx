import { useEffect, useState } from "react"
import ItemDetail from "./ItemDetail"
import { useParams } from 'react-router-dom'

const productos = [
    {id:1 ,nombre:"Hoodie", precio: 6000, img: "http://cdn.shopify.com/s/files/1/0314/0213/1589/products/BlkHoodF_e9ec79f7-dc1e-40d0-a3c2-dc07386d6640_1200x1200.png?v=1637754317", stock:5},
    {id:2 ,nombre:"Cargo Pants", precio: 4000, img: "https://cdn.shopify.com/s/files/1/1673/5051/products/minimal-cargo-pants-streetwear-techwear-2.jpg?v=1585381653", stock:5},
    {id:3 ,nombre:"Piluso", precio: 1000, img: "data:image/jpeg;base64,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", stock:5},
    {id:4 ,nombre:"Morral Utilitario", precio: 2000, img: "https://http2.mlstatic.com/D_NQ_NP_672786-MLA47363931652_092021-O.jpg", stock:5}
]

 
function ItemDetailContainer (props) {
    const { id } = useParams()

let requestDatos = new Promise ((resolve, reject)=>{
    setTimeout(()=> {
        const itemFound = productos.find( item =>{
            return item.id === Number (id)
        })
        resolve(itemFound)
    }, 500)
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
          item={item}
            />
      </div>
        </>
    )
}

export default ItemDetailContainer