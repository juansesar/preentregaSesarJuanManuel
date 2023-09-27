import { useEffect, useState, useParams } from "react";
import { createContext } from "react"


const estado = [
    {
        "id": 1,
        "producto": "cerveza artesanal",
        "precio": 3000,
        "imagen": "../../public/img/cervezaArtesanal.jpg",
        "categoria": "novedades"
        
    },
    {
        "id": 2,
        "producto": "brahama rubia",
        "precio": 4000,
        "imagen": "../../public/img/brahamaRubia.jpg",
        "categoria": "ofertas"
    },
    {
        "id": 3,
        "producto": "andes negra",
        "precio": 1000,
        "imagen": "../../public/img/andesNegra.jpg",
        "categoria": "novedades"
    },
    {
        "id": 4,
        "producto": "andes ipa",
        "precio": 1500,
        "imagen":"../../public/img/andesIpa.jpg",
        "categoria": "sin"
    },
    {
        "id": 5,
        "producto": "andes origenes",
        "precio": 4000,
        "imagen": "../../public/img/andesOrigenes.jpg",
        "categoria": "novedades"
    },
    {
        "id": 6,
        "producto": "grahama sin alcohol",
        "precio": 3000,
        "imagen": "../../public/img/brahamaSinAlcohol.jpg",
        "categoria": "ofertas"
    }
]

export const ShopContext = createContext();

export const ShopComponentContext = ({children}) =>{
    const [productos, setProductos] = useState([])
    const [cart, setCart] = useState([])
    const [totalCarrito, setTotalCarrito] = useState([])
    const [user, setUser] = useState([])

    const vaciarCarrito = () => {
        setCart([])
        setTotalCarrito(0)
    }

    useEffect ( () => {
        setProductos(estado)
    })
    
    return <ShopContext.Provider value={{productos, setProductos, cart, setCart, totalCarrito, setTotalCarrito, vaciarCarrito, user, setUser}}>
        {children}
    </ ShopContext.Provider>
}

