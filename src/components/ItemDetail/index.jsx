import React, { useState, useContext, useEffect } from 'react'
import ItemCount from '../ItemCount/itemCount.jsx'
import { Link } from 'react-router-dom'
import { doc, getDoc, getFirestore } from 'firebase/firestore'
import { CartContext } from '../context/CartContext.jsx'
import style from './style.module.css'

const ItemDetail = ({ detail }) => {
    const db = getFirestore()
    const { addCart } = useContext(CartContext)
    const [quantityAdded, setQuantityAdded] = useState(0)
    const [stock, setStock] = useState(0)

    useEffect(() => {
        const docRef = doc(db, "items", detail.id)

        getDoc(docRef)
            .then(response => {
                setStock(response.data().stock)
            })
    }, [detail.id])

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)
        addCart(detail, quantity)
    }

    return (
        <div className={style['detail_container']}  >
            <div className={style['img_container']}>
                <img className={style['img']} src={detail.image}  alt='detalle' />
            </div>
            <div className={style['date_container']}>
                <h1 >{detail.title}</h1>
                <h2 className={style['h2_price']}>${detail.price}</h2>
                <h3 className={style['h3_description']}>{detail.description}</h3>
                
                <div className={style['cant_button']}>
                    {
                        quantityAdded > 0 ? (
                            <Link to='/cart' > Terminar compra </Link>
                        ) : (
                            <ItemCount initial={1} stock={stock} onAdd={handleOnAdd} />
                        )
                    }
                </div>
            </div>    
        </div>
    )
}

export default ItemDetail