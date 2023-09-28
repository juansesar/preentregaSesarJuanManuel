import {  useState } from 'react'
import style from "./style.module.css"

const CheckoutForm = ({ onConfirm }) => {
    const [cliente, setCliente] = useState('')
    const [telefono, setTelefono] = useState('')
    const [email, setEmail] = useState('')

    const handleConfirm = (event) => {
        event.preventDefault()

        const userData = {
            cliente, telefono, email
        }

        onConfirm(userData)
    }

    return (
        <div className={style['form_conteiner']}>
            <form className={style['form']} onSubmit={handleConfirm}>
                <label>
                    Nombre
                    <input
                        required
                        type="text"
                        value={cliente}
                        onChange={({ target }) => setCliente(target.value)}
                    />
                </label>
                <label>
                    Telefono
                    <input
                        required
                        type="text"
                        value={telefono}
                        onChange={({ target }) => setTelefono(target.value)}
                    />
                </label>
                <label>
                    Email
                    <input
                        required
                        type="email"
                        value={email}
                        onChange={({ target }) => setEmail(target.value)}
                    />
                </label>
                <div>
                    <button type='submit' >Crear Orden de compra</button>
                </div>
            </form>
        </div>
    )
}

export default CheckoutForm