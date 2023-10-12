import React, { useContext } from 'react'
import { CartProvider } from '../../context/CartProvider'
import { Link } from 'react-router-dom'


export  const CartWidget = () => {
    const { totalProducts } = useContext(CartProvider)
    return (
        <div>
            <Link to='/cart'>
                <i className="bi bi-cart4"></i>
                <div >
                    <h4>{totalProducts() || ''}</h4>
                </div>
            </Link>
        </div>

    )
}