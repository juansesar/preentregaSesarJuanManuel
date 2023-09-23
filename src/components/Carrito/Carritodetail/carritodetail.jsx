import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import ItemDetail from "../../../ItemDetail"
import { ShopContext } from "../../../context/shopcontext"

export default function carritoDetailContainer() {
    const [carrito, setCarrito] = useState([])
    const { id } = useParams()
     

    useEffect(() => {
        const getProduct = async () => {
             const response = await fetch('/data/base.json')
            const productos = await response.json()
    
             const productoFiltrado = productos.find(productos => productos.id == parseInt(id))
    
             
             
         }

         getProduct()

 }, [id])

return (
    
   <carritoDetailContainer  carrito = {carrito} />
   
)
}