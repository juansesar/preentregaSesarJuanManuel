
import { useContext } from "react"
import CartItem from "../CartItem"
import { Link } from 'react-router-dom'
import { CartContext } from "../context/CartContext"

const Cart = () => {
    const { cart, totalPrice, vaciarCarrito } = useContext(CartContext)

    if (cart.length === 0) {
        return (
            <div >
                <h3>No hay productos en el carrito</h3>
                <Link to='/' >Ver productos</Link>
            </div>
        )
    }

    return (
        <div>
            {
                cart.map(producto => <CartItem key={producto.id} producto={producto} />)
            }
            <div>
                <p>
                    Total: <b>${totalPrice()}</b>
                </p>
            </div>
            <div >
                <Link to= '/checkout' >Ir a pagar</Link>
                <button onClick={() => vaciarCarrito()} >Limpiar carrito</button>
            </div>
        </div>
    )
}

export default Cart