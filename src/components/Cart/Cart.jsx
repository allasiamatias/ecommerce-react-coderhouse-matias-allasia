import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"
import './cart.css'

function CartWidget (){
    return(
        <div className="carrito">
            <ShoppingCartIcon />
            <p> 0 </p>
        </div>
    )
}

export default CartWidget