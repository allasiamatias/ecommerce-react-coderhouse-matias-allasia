import  cartContext  from "../../context/cartContext"
import "./ItemCounter.css"
import{ useContext, useState} from "react"

function ItemCounter(props){
    const [count, setCount] = useState(1)
    const [limit, setLimit] = useState(false)
    const maxValue = props.stock 

    const { addItem } = useContext(cartContext)

    function sumar(){
        if(count < maxValue){
            setCount(count+1)}
        else{
            setLimit (true)
        }
    }
    
    function restar(){
        if(count > 0){
            setCount(count-1) 
            setLimit(false)
            }
    }

    function agregarAlCarrito(){
        if (count >= 1){
            addItem({ ...props.producto, quantity: count})
            setCount(1)
        }
    }

    return(
        <div className="item-contador">
            <div className="item-contador-buttons">
                <button onClick={restar}> - </button>
                <p className="item-contador-numero"> {count} </p>
                <button onClick={sumar}> + </button>
            </div>
            <div className="item-contador-limite">
                {limit? <p> Maximo Alcanzado </p>:<p> Stock Disponible: {props.stock} </p>}
            </div>
            <div className="item-contador-agregar">
                <button onClick={agregarAlCarrito}>Agregar al Carrito</button>
            </div>
        </div>
    )
}

export default ItemCounter