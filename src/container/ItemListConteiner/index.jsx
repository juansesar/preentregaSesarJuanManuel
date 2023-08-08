import { useState } from "react"
import Item from "../../components/Item"
import style from "./style.module.css"

const ItemListConteiner = () => {
    const [listaDeCompras, SetListaDeCompras] = useState([])
    const [input, setInput] = useState("")
    const addItem = () => {
        SetListaDeCompras([...listaDeCompras, input])
    }
    const deleteItem = (nombre) => {
        const newListaDeCompras = listaDeCompras.filter((I) => I !== nombre)
        SetListaDeCompras(newListaDeCompras)
    }
    return(
        <div className={style["input"]}>
            <input value={input} onChange={(event) => setInput(event.target.value)} />
            <button onClick={addItem}>Guardar</button>
            {listaDeCompras.length > 0 ? (
                <>
                {
                    listaDeCompras.map(producto => <Item nombre={producto} deleteitem = {deleteItem}/>)
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