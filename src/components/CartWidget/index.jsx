import { useContext } from "react"
import { Link } from 'react-router-dom';
import { CartContext } from "../../context/cartContext";

const CartWidget = () => {
    const {totalquantity} =  useContext(CartContext)

    return (
        <Link to="/Cart" className='cartWidget' style={{display: totalquantity > 0 ? 'block' : 'none' }}>
            <i className="bi bi-cart3"></i>
            {totalquantity}
        </Link>
        

    )
}

export default CartWidget