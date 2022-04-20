import { useEffect, useState } from "react"
import ItemList from "./ItemList"
import { useParams } from 'react-router-dom'
import { getProductos, getProdByCat } from "../../../firebase/FromFb"

function ItemListContainer (props) {
    const { categoryid } = useParams()
    const [items, setItems] = useState([])
    
    useEffect(
        () =>{
        let requestDatos = getProductos()
        let reqDatosCat = getProdByCat(categoryid)

        if (categoryid === undefined){
        requestDatos
        .then((datosResolve)=>{
            setItems(datosResolve)})
        .catch((errorReject)=>{
        console.log(errorReject);
        }).finally(()=>{
            console.log("Promise finished")
        })       }
        else {
            reqDatosCat.then((datRes)=>setItems(datRes))
        }
    }, [categoryid])

    return(
        <> 
        <div className="container card-deck row ">           
        {props.name}
       <ItemList data={items} />      
        </div>    
        </>
    )
}

export default ItemListContainer