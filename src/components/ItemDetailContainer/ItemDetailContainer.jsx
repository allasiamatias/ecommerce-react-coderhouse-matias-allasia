import { useEffect, useState } from "react"
import ItemCounter from "../ItemCounter/ItemCounter"
import { useParams } from "react-router"
import { getProductById } from "../../data/mockAPIService"
import './ItemDetailContainer.css'
import { RiseLoader } from "react-spinners"


function ItemDetailContainer(){
    
    const { idParam } = useParams()

    const [itemData,setItemData] = useState({ loading: true })
    
    useEffect( () => {
        getProductById(idParam)
            .then(res => setItemData(res))
    },[])
    
    return(
        <div className="item-card">
            {itemData.loading ? 
            <div className="loader">
                < RiseLoader color="#02587a"/>
            </div>
            :
            <div className="item-card-details">    
                <div className="item-card-img">
                    <img src= {itemData.imagen} alt= {itemData.titulo} />
                </div>
                <div className="item-card-txt">
                    <h2 className="item-card-txt-titulo"> {itemData.titulo} </h2>
                    <h4 className="item-card-txt-precio"> $ {itemData.precio} </h4>
                    <p className="item-card-txt-descripcion"> {itemData.descripcion} </p>
                    <ItemCounter stock={itemData.stock} />
                </div>
            </div>}
        </div>
    )
}

export default ItemDetailContainer