import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NotesContainer from './componentes/NotesContainer/NotesContainer';
import Navbar from './componentes/Navbar/Navbar';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
import Footer from './componentes/Footer/Footer';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
          <Route path='/detail/:productId' element={<ItemDetailContainer/>}/>
        </Routes>
      </BrowserRouter>


      <Navbar colorTitle="blue"/>
      
      <NotesContainer/>
      

      

      <Footer/>
    </div>
  );
}

export default App;
