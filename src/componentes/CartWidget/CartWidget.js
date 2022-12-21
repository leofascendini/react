import { CartContext } from '../Context/CartContext'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import './CartWidget.css'

const CartWidget = () => {
    const {getQuantity} = useContext(CartContext)

    const totalQuantity = getQuantity()
    return (
       <nav className='cart'>
        <Link className='carrito' to='/Cart'>
            <img src={"./images/carrito.png"} alt="cart-widget"></img>
            <b>{totalQuantity}</b>
        </Link>
        </nav>
 )
}

export default CartWidget