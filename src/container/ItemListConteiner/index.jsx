import { useState } from "react"
import Item from "../../components/Item"

const ItemListConteiner = () => {
    const [listaDeCompras, SetListaDeCompras] = useState([])
    const [input, setInput] = useState("")
    const addItem = () => {
        SetListaDeCompras([...listaDeCompras, input])
    }
    return(
        <div>
            <input onChange={(event) => setInput(event.target.value)} />
            <button onClick={addItem}>Guardar</button>
            {listaDeCompras.length > 0 ? (
                <>
                {
                    listaDeCompras.map(producto => <Item/>)
                }
                </>
                ):(
                    <p>No hay productos</p>
                )
            }
        </div>
    )
}

export default ItemListConteiner