import styles from "./styles.module.css"

const Item = ({nombre, deleteitem}) => {
    return(
        <div className={styles["contenedor"]}>
            <p>{nombre}</p>
            <button onClick={() => deleteitem(nombre)} >Borrar</button>
        </div>
        )
}
export default Item