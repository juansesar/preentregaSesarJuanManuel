import { Link } from 'react-router-dom';

const Cart = () => {
    const { cart, cleanCart, totalQantity, total } = useCartContext(CartContext)

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
            {cart.map(p => <CartItem key= {p.id} {...p}/>) }
            <h3>total: ${total}</h3>
            <button onClick={() => cleanCart() } className = "button"> limpiae carrito </button>
            <Link to="/Checkout" className='option'>Checkout</Link>
        </div>
    )
}

export default Cart