
import { useContext } from "react"
import CartItem from "../CartItem"
import { Link } from 'react-router-dom'
import {  CartProvider} from "../../context/CartProvider"
import style from "./style.module.css"
const Cart = () => {
    const { cart, totalPrice, clearCart } = useContext(CartProvider)

    if (cart.length === 0) {
        return (
            <div className={style['container']}>
                <h3>No hay productos en el carrito</h3>
                <Link className={style['links']} to='/' >Ver productos</Link>
            </div>
        )
    }

    return (
        <div className={style['container']}>
            {
                cart.map(producto => <CartItem key={producto.id} producto={producto} />)
            }
            <div>
                <p>
                    Total: <b>${totalPrice()}</b>
                </p>
            </div>
            <div className={style['container']} >
                <Link className={style['links']} to= '/checkout' >Ir a pagar</Link>
                <button className={style['links']} onClick={() => clearCart()} >Limpiar carrito</button>
            </div>
        </div>
    )
}

export default Cart