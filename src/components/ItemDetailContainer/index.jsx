import { useParams } from "react-router-dom"
import ItemDetail from '../ItemDetail/index'
import React, { useState, useContext, useEffect } from 'react'
import { doc, getDoc, getFirestore } from 'firebase/firestore'
import { CartProvider } from '../../context/CartProvider.jsx'


const ItemDetailContainer = ({ detail }) => {
    const { id } = useParams()
    const db = getFirestore()
    const { addCart } = useContext(CartProvider)
    const [product, setProduct] = useState(null)
    const [quantityAdded, setQuantityAdded] = useState(0)
    const [stock, setStock] = useState(0)
   
    
    useEffect(() => {
        console.log(id)
        const docRef = doc(db, "items", detail.id)

        getDoc(docRef)
            .then(response => {
                setStock(response.data().stock)
            })
    }, [detail.id])

    const docRef = doc(db, 'items', id)

    getDoc(docRef)
    
        .then(response => {
            const data = response.data()
            const productAdapted = { id: response.id, ...data }
            setProduct(productAdapted)
        }, [id])

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)
        addCart(detail, quantity)
    }
    

    if (product === null) {
        return (
            <div >
                <h2>Cargando...</h2>
            </div>
        )
    }

    
    
    
    return (
        <ItemDetail detail={product} quantityAdded = {quantityAdded} stock = {stock} handleOnAdd />
    )
}



export default ItemDetailContainer
