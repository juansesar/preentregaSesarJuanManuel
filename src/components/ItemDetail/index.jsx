import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import ItemDetail from './index'

export default function ItemDetail() {
    const [detail, setDetail] = useState({})
    const { id } = useParams()

    useEffect(() => {
        const getProduct = async () => {
            const response = await fetch('/data/base.json')
            const productos = await response.json()
    
            const productoFiltrado = productos.find(productos => productos.id == parseInt(id))
    
            setDetail(productoFiltrado)
        }

        getProduct()
}, [id])

return (
    <ItemDetail detail={detail} />
)
}