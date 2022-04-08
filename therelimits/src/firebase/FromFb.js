import { collection, getDocs, doc, addDoc } from "firebase/firestore";
import { getFirestoreDB } from "./firebaseConfig"

const db = getFirestoreDB()

export async function getProductos(){
        
        const documentSnapshot = getDocs(collection(db, "items"))
        let items = (await documentSnapshot).docs.map(doc => doc.data())
        return items
    }


    export async function getNameId(id){
        const miColec = collection (db, "items")
        const docRef = doc (miColec, id)
        const resultadosDoc = await getDocs(docRef)
        return { ...resultadosDoc.data(), id: resultadosDoc.id}

    }
    export async function sendOrder(orderData){
        const miColec = collection(db, "orders")
        const orderDoc = await addDoc(miColec, orderData)
        console.log(orderDoc.id)
        return orderDoc.id
       
    }
