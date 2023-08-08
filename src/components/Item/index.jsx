import styles from "./styles.module.css"

const Item = ({nombre}) => {
    return(
        <div className={styles["contenedor"]}>
            <p>{nombre}</p>
            <button>Borrar</button>
        </div>
        )
}
export default Item