import styles from "./styles.module.css"

export default function Item() {
    const [items, sentItems] = usestate([])

    const getProducto = async () => {
        const response = await fetch("/data/base.json")
        const productos = await response.json()
        sentItems(productos)
    }
    useEffect(() => {
        getProducto()
    }, [])
    return (
        
    )
}
