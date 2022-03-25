import { collection, getDocs } from "firebase/firestore";
import { getFirestoreDB } from "./firebaseConfig"
import { useEffect, useState } from "react";

const FromFb = () => {
    const [ productos, setProductos] = useState([])
    
    async function getProductos(){
        const db = getFirestoreDB()
        const documentSnapshot = getDocs(collection(db, "items"))
    const items = await documentSnapshot   
        setProductos(items.docs)
        console.log(items.docs)
}


useEffect(() => {
    getProductos()
}, [])



    return (
        <>
        <div>
           lista 
        </div>
        {productos.map((p) => <h1> {p.data().nombre} </h1>)}
        </>
    );
    
}



export default FromFb