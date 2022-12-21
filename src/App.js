import './App.css';
import { CartProvider } from './componentes/Context/CartContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NotesContainer from './componentes/NotesContainer/NotesContainer';
import Navbar from './componentes/Navbar/Navbar';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
import Footer from './componentes/Footer/Footer';
import Cart from './componentes/Cart/Cart'





function App() {
  

return (
    <div className="App">
      <CartProvider>
        <BrowserRouter>
          <Navbar/>
            <Routes>
              <Route path='/' element={<NotesContainer/>}/>
              <Route path='/:categoryId' element={<NotesContainer/>}/>
              <Route path='/detail/:noteId' element={<ItemDetailContainer/>}/>
              <Route path='/Cart' element={<Cart/>}/>
            </Routes>
        </BrowserRouter>
      </CartProvider>
      
      

      <Footer/>
    </div>
  );
}

export default App;
