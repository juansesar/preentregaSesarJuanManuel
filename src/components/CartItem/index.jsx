import React from 'react'
import { CartContext } from '../context/CartContext'
import { useContext, useState } from 'react'



const CartItem = ({ producto }) => {
    const { cart, setCart } = useContext(CartContext)

    const handleRemoveProduct = (id) => {
        const updatedCart = cart.filter(producto => producto.id !== id)

        setCart(updatedCart)
    }

    return (
        <div >
            <div >
                <img src={producto.image} alt='no hay imagen' ></img>
            </div>
            <div >
                <h1>{producto.title}</h1>
                <p>Cantidad: {producto.quantity}</p>
                <p>Precio: ${producto.price}</p>
                <p>Subtotal: ${producto.quantity * producto.price}</p>
                <button onClick={() => handleRemoveProduct(producto.id)} >Eliminar producto</button>
            </div>
        </div>
    )
}

export default CartItem