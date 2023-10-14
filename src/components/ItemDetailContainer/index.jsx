import { useParams } from "react-router-dom"
import ItemDetail from '../ItemDetail/index'
import React, { useState, useContext, useEffect } from 'react'
import { doc, getDoc, getFirestore } from 'firebase/firestore'
import { CartProvider } from '../../context/CartProvider.jsx'


const ItemDetailContainer = () => {
    const { id } = useParams()
    const db = getFirestore()
    const { addCart } = useContext(CartProvider)
    const [product, setProduct] = useState(null)
    const [quantityAdded, setQuantityAdded] = useState(0)
    
    useEffect(() => {
        const docRef = doc(db, 'items', id)

                 getDoc(docRef)
    
        .then(response => {
            const data = response.data()
            const productAdapted = { id: response.id, ...data }
            setProduct(productAdapted)
        })
    }, [id])

    if (product === null) {
        return (
            <div >
                <h2>Cargando...</h2>
            </div>
        )
    }

    
    
    
    return (
        <ItemDetail detail={product} quantityAdded = {quantityAdded}  setQuantityAdded = {setQuantityAdded} addCart = {addCart}/>
    )
}



export default ItemDetailContainer