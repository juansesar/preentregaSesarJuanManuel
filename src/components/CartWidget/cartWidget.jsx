import { useContext } from "react"
import { Link } from 'react-router-dom';

const cartWidget = () => {
    const {totalquantity} =  useContext(cartContext)

    return (
        <Link to="/Cart" className='cartWidget' style={{display: totalquantity > 0 ? 'block' : 'none' }}>
            <img className = "CartImg"    src= {Cart} alt="Cart-Widget" />
            {totalquantity}
        </Link>
        

    )
}

export default cartWidget