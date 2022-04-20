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
        {props.name}
        <div className="row row-cols-md-3 g-5 me-5 ms-5 mt-3 ps-5 pe-5" >           
       
       <ItemList data={items} />      
       
        </div>    
        </>
    )
}

export default ItemListContainer