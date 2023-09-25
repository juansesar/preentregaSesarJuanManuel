import { Link } from 'react-router-dom';
import { CartContext } from '../../context/cartContext';
import {  useContext } from "react";

const Cart = () => {
    const { cart, cleanCart, totalQantity, total } = useContext(CartContext)

    if (totalQantity  === 0 ) {
        return(
            <div>
                <h1> No hay productos en el carrito </h1>
                <Link to="/">Productos</Link>
            </div> 
        )
    }
    return(
        <div>
            {cart.map(p => <cart key= {p.id} {...p}/>) }
            <h3>total: ${total}</h3>
            <button onClick={() => cleanCart() } className = "button"> limpiae carrito </button>
            <Link to="/Checkout" className='option'>Checkout</Link>
        </div>
    )
}

export default Cart