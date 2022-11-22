import logo from './logo.svg';
import './App.css';
import Navbar from './componentes/Navbar/Navbar';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <Navbar colorTitle="blue"/>
      <ItemListContainer greeting="Saludo"/>
    </div>
  );
}

export default App;
