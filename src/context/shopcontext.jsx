import { useEffect, useState, useParams } from "react";
import { createContext } from "react";

function Estado () {
const [mockProducto, sentMockProducto] = useState([])
    const {id} = useParams()

useEffect(() => {
    const getProducto = async () => {
        const response = await fetch("/data/base.json")
        const productos = await response.json()

        const filtroProducto = productos.filter(producto => producto.categoria === id)
        
        if (filtroProducto.length > 0) return sentMockProducto(filtroProducto)

        sentMockProducto(productos)
    }
    getProducto()
}, [id])}

export const ShopContext = createContext();

export const ShopComponentContext = ({itemDetail}) =>{
    const [productos, setProducto] = useState([])
    const [cart, setCart] = useState([])
    const [totalCarrito, setTotalCarrito] = useState([])
    const [user, setUser] = useState([])

    const vaciarCarrito = () => {
        setCart([])
        setTotalCarrito(0)
    }

    useEffect ( () => {
        setProducto(Estado)
    })
    
    return <ShopContext.Provider value={{productos, setProducto, cart, setCart, totalCarrito, setTotalCarrito, vaciarCarrito, user, setUser}}>
        {itemDetail}
    </ ShopContext.Provider>
}

