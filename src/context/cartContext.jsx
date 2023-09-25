import { createContext, useState } from "react";
import { Card } from "react-bootstrap";
import { Prev } from "react-bootstrap/esm/PageItem";

export const CartContext = createContext(
    {cart:[]}
)

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])

    console.log (cart)

    const addItem = (item, quantity) => {
        if (!isInCart(item.id)) {
            setCart(Prev => [... prev, {...item, quantity}])
        }else {
            console.error("el producto ya fue agregado")
        }
    }

    const removeItems = (itemId) =>{
        const cartUpgrated = cart.filter(prod => prod.id !== item.id)
        setCart(cartUpgrated)
    }

    const cleanCart = () =>{
        setCart([])
    }

    const isInCart = (itermId) =>{
        return cart.some(prod => prod.id === item.id)

    }

    return (
        <CartContext.Provider value = {{addItem, cart, removeItems, cleanCart }}>
        {children}
        </CartContext.Provider >
    )
}