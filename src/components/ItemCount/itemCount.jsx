import { useState, useEffect } from "react"
import style from "./style.module.css"
import { doc, getDoc, getFirestore } from 'firebase/firestore'

const ItemCount = ({ dato, initial, onAdd}) => {
    const [quantity, setQuantity] = useState (initial)
    const [stock, setStock] = useState(0)
    const db = getFirestore()

    useEffect(() => {
        const docRef = doc(db, "items", dato)

        getDoc(docRef)
            .then(response => {
                setStock(response.data().stock)
            })
    }, [dato])

    const increment = () => {
        if (quantity < stock) {
            setQuantity(quantity + 1)
        
    }}

    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    }
    
    return(
        <div className={style['conteiner']}>
            <div className={style['conteinerButtons']}>
                <button className="button" onClick={decrement}>-</button>
                <h4 className={style['number']}>{quantity}</h4>
                <button className="button" onClick={increment}>+</button>
            </div>
            <div >
                <button className="button" onClick= {() => onAdd(quantity) } disabed = {!stock}>
                    Agregar al carrito
                </button>
            </div>
        </div>
    )
}


export default ItemCount 

