import { createContext, useEffect, useState } from 'react'

const cartContext = createContext( { cart: [] } )

const starterCart = JSON.parse(localStorage.getItem("cart")) || []

export function CartContextProvider(props){
    const [cartItems, setCartItems] = useState(starterCart)

    function addItem(item){

        const newCartItems = structuredClone(cartItems)
        const existingItems = newCartItems.find(i => i.id === item.id)

        if(existingItems){
            existingItems.quantity += item.quantity
        }else{
            newCartItems.push(item)
        }
        setCartItems( newCartItems)
    }

    
    function removeItem(id){
        const newCartItems = cartItems.filter(item => item.id !== id)
        setCartItems(newCartItems)
    }
    
    function clearCart(){
        setCartItems([])
    }

    function countItemsInCart(){
        let totalItems = cartItems.reduce((acc, item) => acc + item.quantity,0)
        return totalItems
    }

    function getTotalPrice(){
        return cartItems.reduce((acc, item) => acc + item.precio * item.quantity,0)
    }

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cartItems))
    },[cartItems])

    return(
        <cartContext.Provider value= { {cart: cartItems, addItem, removeItem, clearCart, countItemsInCart, getTotalPrice} }>
            { props.children }
        </cartContext.Provider>
    )
}

export default cartContext