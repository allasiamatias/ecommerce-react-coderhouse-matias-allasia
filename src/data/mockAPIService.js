import productos from "./data";

function getData(){
    return new Promise((resolve)=>{
        setTimeout( () => {resolve(productos)},1000)
    })
}

export function getProductById(idParam){
    return new Promise ((resolve) => {
        const itemRequested = productos.find((producto) => String(producto.id) === idParam)
        setTimeout(() => {resolve(itemRequested)},1000)
    })
}

export function getProductByCategory(catParam){
    return new Promise ((resolve) => {
        const itemRequested = productos.filter((producto) => producto.categoria === catParam)
        setTimeout(() => {resolve(itemRequested)},1000)
    })
}

export default getData