import { collection, getDocs, doc, addDoc, getDoc, query, where } from "firebase/firestore";
import { getFirestoreDB } from "./firebaseConfig"

const db = getFirestoreDB()

export const productsCollection = collection(db, 'items')

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
        return orderDoc.id
       
}
export const getProductById = async (id) => {
        const docRef = doc(productsCollection, id);
        const docSnap = await getDoc(docRef);
        return docSnap.data()
      }
export async function getProdByCat(categoria){
        const miColec = collection (db, "items")
        const myquery =query (miColec, where ("categoryid", "==", categoria))
        const itemSnap = await getDocs (myquery)
        const result = itemSnap.docs.map( item =>{
                return { ...item.data(), id: item.id}
        })
        return result
}
