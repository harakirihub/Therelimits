import { getFirestore, collection, getDocs } from "firebase/firestore";

import { useEffect, useState } from "react";

const FromFb = () => {
    const [ productos, setProductos] = useState([])
    
    useEffect(async () =>{
        const db = getFirestore

        const querySnapshot = await getDocs(collection(db, "products"))
        let listaDeProductos = []
        querySnapshot.forEach((doc)=>{
            console.log(doc.data)
            listaDeProductos.push(doc.data())
        })
        setProductos(listaDeProductos)


    }, [])

    return (
        <>
        <div>
           lista 
        </div>
        {productos.map((p) => p.nombre )}
        </>
    );
    
}



export default FromFb