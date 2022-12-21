import { useContext } from "react"
import { CartContext } from "../Context/CartContext"
import './Cart.css'


const Cart = () => {

    const {cart, removeItem, getTotal} = useContext(CartContext)
    
    const total = getTotal()
  
    return(
        <div>
            {
                cart.map(Cart => {
                    return(
                        <div className="compraTotal" key={Cart.id}>
                            <h2>{Cart.name}</h2>
                            <img src={Cart.img} alt={Cart.name} style={{width: 150}}/>
                            <p>{Cart.description}</p>
                            <h2>$ {Cart.price}</h2>
                            <h2>Subtotal: {Cart.price * Cart.quantity}</h2>
                            <button onClick={() => removeItem(Cart.id)}>Eliminar producto</button>
                        </div>
                    )
                })
            }
            <h3>Total: $ {total}</h3>
        </div>
    )
}

export default Cart