import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"
import './cart.css'
import { useContext } from "react"
import  cartContext  from "../../context/cartContext"
import { Link } from "react-router"

function CartWidget (){
    const { cart, countItemsInCart } = useContext(cartContext)

    return(
        <Link to="/cart" >
            <div className="carrito">
                <ShoppingCartIcon />
                {cart.length > 0 ? countItemsInCart(): <p></p>}
            </div>
        </Link>
    )
}

export default CartWidget