import './ItemListContainer.css'
import Item from '../Item/Item.jsx';
import getData, { getProductByCategory } from '../../data/mockAPIService.js';
import { useState,useEffect } from 'react';
import { useParams } from 'react-router';
import { RiseLoader } from 'react-spinners';

function ItemListContainer(props){
    
    const [productos, setProductos] = useState([])
    const {catParam} = useParams()
    const [loading,setLoading] = useState(true)

    useEffect( () => {
        setLoading(true)

        if(catParam){
            getProductByCategory(catParam)
                .then((data) =>{
                    setProductos(data)
                    setLoading(false)
                })
        }else{
            getData()
                .then((data) => {
                    setProductos(data)
                    setLoading(false)
                })
        }
    },[catParam])

    return(
    <>
        <section className="greeting">
            <h1>{props.greeting}</h1>
            
            {catParam ? <h2>{ catParam.toUpperCase() }</h2>:<h2>Todos los Productos</h2>}
        </section>
        {loading? 
        <div className='loader'>
            < RiseLoader color="#02587a"/>
        </div>
        :
        <div className='contenedor-productos'>
            {
                productos.map(producto => 
                    <Item
                    key= {producto.id}
                    {...producto}
                    />
                )
            }
        </div>
        }
    </>
    )
}

export default ItemListContainer;