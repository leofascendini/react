import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CartWidget from './componentes/CartWidget/CartWidget';
import NotesContainer from './componentes/NotesContainer/NotesContainer';
import Navbar from './componentes/Navbar/Navbar';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
import Footer from './componentes/Footer/Footer';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<NotesContainer/>}/>
          <Route path='/category/:categoryId' element={<NotesContainer/>}/>
          <Route path='/detail/:noteId' element={<ItemDetailContainer/>}/>
        </Routes>
      </BrowserRouter>


  
      
      
      

      
      <Footer/>
    </div>
  );
}

export default App;
