import { createContext, useContext, useState } from "react";
import { Card } from "react-bootstrap";
import { Prev } from "react-bootstrap/esm/PageItem";
import { ShopContext } from "./shopcontext";

export const CartContext = createContext(
    {cart:[]}
)

export const CartProvider = ({children}) => {
    const {item} = useContext(ShopContext)
    const [cart, setCart] = useState([])

    console.log (cart)

    const addItem = (item, quantity) => {
        if (!isInCart(item.id)) {
            setCart(Prev => [... Prev, {...item, quantity}])
        }else {
            console.error("el producto ya fue agregado")
        }
    }

    const removeItems = (item) =>{
        const cartUpgrated = cart.filter(prod => prod.id !== item.id)
        setCart(cartUpgrated)
    }

    const cleanCart = () =>{
        setCart([])
    }

    const isInCart = (item) =>{
        return cart.some(prod => prod.id === item.id)

    }

    return (
        <CartContext.Provider value = {{addItem, cart, removeItems, cleanCart }}>
        {children}
        </CartContext.Provider >
    )
}