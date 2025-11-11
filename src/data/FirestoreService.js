// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { addDoc, collection, doc, getDoc, getDocs, getFirestore, query, where } from "firebase/firestore"


const firebaseConfig = {
    apiKey: import.meta.env.VITE_FS_APIKEY,
    authDomain: import.meta.env.VITE_FS_AUTH,
    projectId: import.meta.env.VITE_FS_PROJECTID,
    storageBucket: import.meta.env.VITE_FS_BUCKET,
    messagingSenderId: "621502901975",
    appId: import.meta.env.VITE_FS_APPID,
    measurementId: "G-RX84RCJQPS"
}

const app = initializeApp(firebaseConfig)

const db = getFirestore(app)

async function getData(){
    const productsRef = collection(db, "products")
    const productsSnapshot = await getDocs(productsRef)
    const docs = productsSnapshot.docs
    const dataDocs = docs.map( item =>{
        return { ...item.data(), id: item.id }
    })
    return dataDocs
}

export async function getProductById(idParam) {
    const docRef = doc(db, "products", idParam)
    const docSnapshot = await getDoc(docRef)
    const docData = docSnapshot.data()
    const idDoc = docSnapshot.id
    return {...docData, id: idDoc}
}

export async function getProductByCategory(categParam){
    const productsRef = collection(db, "products")

    const q = query(productsRef, where("categoria", "==", categParam))

    const productsSnapshot = await getDocs(q)
    const docs = productsSnapshot.docs
    const dataDocs = docs.map (item => {
        return {...item.data(), id: item.id}
    })
    return dataDocs
}

export async function createBuyOrder(orderData) {
    const ordersRef = collection (db,"orders")
    const newDoc = await addDoc(ordersRef, orderData)
    return newDoc
}

export async function exportProducts() {
    const productsRef = collection (db, "products")
    for(let item of productos){
        delete  item.id
        const newDoc = await addDoc(productsRef, item)
        console.log("documento creado", newDoc.id)
    }
}

export default getData