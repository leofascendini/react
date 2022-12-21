import { useState, createContext } from 'react';

export const CartContext = createContext({ cart: [] })

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])

    const addItem = (notesToAdd) => {
        if(!isInCart(notesToAdd.id)) {
        setCart([...cart, notesToAdd])
        }
}

  const isInCart = (id) => {
    return cart.some(notes => notes.id === id)
  }

  const getQuantity = () => {
    let acc = 0

    cart.forEach(notes => {
      acc += notes.quantity 
    })

    return acc
  }

  const getTotal = () => {
    let acc = 0

    cart.forEach(Cart => {
      acc += Cart.price * Cart.quantity
    })
    return acc
  }

  const removeItem = (id) => {
    const nuevaCart = cart.filter(Cart => Cart.id !== id)
    setCart(nuevaCart)
  }

  console.log(cart)

    return(
        <CartContext.Provider value={{ cart, addItem, isInCart, getQuantity, getTotal, removeItem }}>
            {children}
        </CartContext.Provider>
    )
}