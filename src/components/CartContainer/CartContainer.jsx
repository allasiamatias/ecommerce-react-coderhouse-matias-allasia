import { useContext, useState } from "react"
import cartContext from "../../context/cartContext"
import { createBuyOrder } from "../../data/FirestoreService"
import CartItem from "../CartItem/CartItem"
import './CartContainer.css'
import CheckOutForm from "../CheckOutForm/CheckOutForm"

function CartContainer(){
    const {cart, getTotalPrice, clearCart} = useContext(cartContext)
    const [orderCreated, setOrderCreated] = useState(false)
    const [showForm, setShowForm] = useState(false)

    async function handleCheckout(formData){
        const orderData = {
            buyer: formData,
            cart,
            total:getTotalPrice(),
            date: new Date()
        }
        const response = await createBuyOrder(orderData)
        setOrderCreated(response.id)
        clearCart()
    }

    if(orderCreated){
        return(
        <section className="cart-container">
            <h2>Gracias por tu compra</h2>
            <p>Este es el id de tu compra: {orderCreated}</p>
        </section>
        )
    }

    const handleClear = () => {
        clearCart()
    }

    const handleConfirmClick = () =>{
        setShowForm(true)
    }

    return(
        <>
        {cart.length > 0 ? (
            <section className="cart-container">
                <h1>Carrito de Compras</h1>
                <CartItem/>

                <div className="cart-total" >
                    <h2>Total: ${getTotalPrice()} </h2>
                </div>

                <div className="buttons-cart">
                    {!showForm && (
                        <>
                            <button
                                className="confirm-button"
                                onClick={handleConfirmClick}
                            >
                                Confirmar compra
                            </button>
                            <button
                                className="clear-button"
                                onClick={handleClear}
                            >
                                Vaciar Carrito
                            </button>
                        </>
                    )}

                    {showForm && (
                        <CheckOutForm handleCheckout={handleCheckout} />
                    )}
                </div>
            </section>
            ) : (
                <section className="cart-container">
                    <h3>Tu carrito está vacío</h3>
                </section>
            )}
        </>
    )
}

export default CartContainer