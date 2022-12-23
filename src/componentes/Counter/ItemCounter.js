import { useState } from "react"
import { Link } from "react-router-dom"
import './ItemCounter.css'

const ItemCount = ({stock, onAdd}) => {
    const [count, setCount] = useState(1)

    const decrement = () => {
        if(count > 1) {
            setCount(prev => prev - 1)
        }
    }

    const increment = () => {
        if (count < stock) {
            setCount(prev =>  prev + 1)
        }
    }

    return (
        <div className="ItemCounter">
            <p>
            <button onClick={decrement}><b>-</b></button><b>{count}</b>
            <button onClick={increment}><b>+</b></button>
            </p>
            <Link className="AgregarCarrito" onClick={() => onAdd(count)}><b>Agregar al carrito</b></Link>
            <Link className="AgregarCarrito" to='/'><b>Continuar comprando</b></Link>
            <Link className="AgregarCarrito" to='/Cart'><b>Ir al carrito</b></Link>
        </div>    
    )
}

export default ItemCount