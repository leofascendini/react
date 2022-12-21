import './App.css';
import { useState, createContext } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NotesContainer from './componentes/NotesContainer/NotesContainer';
import Navbar from './componentes/Navbar/Navbar';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
import Footer from './componentes/Footer/Footer';
import CartWidget from './componentes/CartWidget/CartWidget';


export const CartContext = createContext({ cart: [] })

function App() {
  const [cart, setCart] = useState([])

  const addItem = (notesToAdd) => {
    if(!isInCart(notesToAdd.id)) {
      setCart([...cart, notesToAdd])
    }
  }

  const isInCart = (id) => {
    return cart.some(notes => notes.id === id)
  }
console.log(cart)
return (
    <div className="App">
      <CartContext.Provider value={{ cart, addItem }}>
        <BrowserRouter>
          <Navbar/>
            <Routes>
              <Route path='/' element={<NotesContainer/>}/>
              <Route path='/:categoryId' element={<NotesContainer/>}/>
              <Route path='/detail/:noteId' element={<ItemDetailContainer/>}/>
              <Route path='/Cart' element={<CartWidget/>}/>
            </Routes>
        </BrowserRouter>
      </CartContext.Provider>
      
      

      <Footer/>
    </div>
  );
}

export default App;
