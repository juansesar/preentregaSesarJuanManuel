import { createContext, useContext, useState } from "react";
import { Card } from "react-bootstrap";
import { Prev } from "react-bootstrap/esm/PageItem";
import { ShopContext } from "./shopcontext";

export const CartContext = createContext(
    {cart:[]}
)

export const CartProvider = ({children}) => {
    
    const [cart, setCart] = useState([])
    const [totalCarrito, setTotalCarrito] = useState(0)

    console.log (cart)
    const getProductById = (id) => cart.find(product => product.id === id) || null
    const addCart = (detail, quantity) => {
        const product = getProductById(detail.id)
        if(!product) {
            detail.quantity = quantity
            setCart([...cart, detail])
        } else {
            if(product.quantity + quantity > product.stock) return false
            product.quantity += quantity
        }
        setTotalCarrito(totalCarrito + quantity)
        return true;
    }
    
    
    const addItem = (item, quantity) => {
        if (!isInCart(item.id)) {
            setCart(Prev => [... Prev, {...item, quantity}])
        }else {
            console.error("el producto ya fue agregado")
        }
    }

    const removeItems = (itemId) =>{
        const cartUpdated = cart.filter(prod => prod.id !== itemId)
        setCart(cartUpdated)
    }

    const cleanCart = () =>{
        setCart([])
    }

    const isInCart = (item) =>{
        return cart.some(prod => prod.id === item.id)

    }

    return (
        <CartContext.Provider value = {{addItem, cart, removeItems, cleanCart, addCart, totalCarrito, setTotalCarrito }}>
        {children}
        </CartContext.Provider >
    )
}