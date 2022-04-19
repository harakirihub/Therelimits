import { useEffect, useState } from "react"
import ItemDetail from "./ItemDetail"
import { useParams } from 'react-router-dom'
import { getProductById  } from "../../../firebase/FromFb"

function ItemDetailContainer (props) {
    const { id } = useParams()    
    const [item, setItem] = useState([])
    useEffect(
        () =>{
            getProductById(id).then (data => {
                setItem(data)
            })
        }, [id])

    return(
        <>
        <div className="container mb-3"> 
       <ItemDetail
          item={item}/>
      </div>
        </>
    )
}

export default ItemDetailContainer