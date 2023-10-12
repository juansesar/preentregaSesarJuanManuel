import ItemCount from '../ItemCount/itemCount.jsx'
import { Link } from 'react-router-dom'
import style from './style.module.css'
import React, {useParams} from 'react'
import ItemDetailContainer from '../ItemDetailContainer/index.jsx'

const ItemDetail = ({ detail },{quantityAdded}, {stock}, handleOnAdd) => {
    
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