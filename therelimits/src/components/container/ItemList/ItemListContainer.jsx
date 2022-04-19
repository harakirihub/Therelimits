import { useEffect, useState } from "react"
import ItemList from "./ItemList"
import { useParams } from 'react-router-dom'
import { getProductos } from "../../../firebase/FromFb"

function ItemListContainer (props) {
    const { categoryid } = useParams()
    const [items, setItems] = useState([])
    
    useEffect(
        () =>{
        let requestDatos = getProductos(categoryid)
        requestDatos
        .then((datosResolve)=>{
            setItems(datosResolve)})
        .catch((errorReject)=>{
        console.log(errorReject);
        }).finally(()=>{
            console.log("Promise finished")
        })       
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