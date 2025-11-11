import { Delete } from "@mui/icons-material"
import { useContext } from "react"
import cartContext from "../../context/cartContext"
import './CartItem.css'


function CartItem(){
    const { cart, removeItem} = useContext(cartContext)
    

    return (
        <>
            <div >
                {
                    cart.map (item =>
                        <div className="cart-item" key={item.titulo}> 
                            <div className="cart-imagen">
                                <img src= {item.imagen}  alt= {item.titulo} />
                            </div>
                            
                            <div className="cart-txt">
                                <h3> {item.titulo} </h3>
                                <p>Precio Unitario: ${item.precio} </p>
                                <p> Cantidad: {item.quantity} </p>
                                <p>Total: {item.quantity * item.precio} </p>
                            </div>

                            <div>
                                <button onClick={()=> removeItem(item.id)}>
                                    <Delete/>
                                </button>
                            </div>
                        </div>
                    )
                }
            </div>
        </>
    )
}

export default CartItem