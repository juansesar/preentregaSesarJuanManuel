import { useContext } from "react"
import { Link } from 'react-router-dom';
import { CartComponentContext } from "../context/CartContext";



const CartWidget = () => {
    const {totalquantity} =  useContext(CartComponentContext)

    return (
        <Link to="/Cart" className='cartWidget' style={{display: totalquantity > 0 ? 'block' : 'none' }}>
            <i className="bi bi-cart3"></i>
            {totalquantity}
        </Link>
        

    )
}

export default CartWidget