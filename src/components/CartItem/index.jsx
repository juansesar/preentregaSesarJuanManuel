import React from 'react'
import { useContext } from 'react'
import style from "./style.module.css"
import {  CartProvider } from '../../context/CartProvider'


const CartItem = ({ producto }) => {
    const { cart, setCart } = useContext(CartProvider)

    const handleRemoveProduct = (id) => {
        const updatedCart = cart.filter(producto => producto.id !== id)

        setCart(updatedCart)
    }

    return (
        <div className={style['cartItem_container']} >
            <div className={style['img_container']}>
                <img className={style['img']}  src={producto.image} alt='no hay imagen' ></img>
            </div>
            <div >
                <h1>{producto.title}</h1>
                <p className={style['p']}>Cantidad: {producto.quantity}</p>
                <p className={style['p']}>Precio: ${producto.price}</p>
                <p className={style['p']}>Subtotal: ${producto.quantity * producto.price}</p>
                <button className={style['p_button']} onClick={() => handleRemoveProduct(producto.id)} >Eliminar producto</button>
            </div>
        </div>
    )
}

export default CartItem