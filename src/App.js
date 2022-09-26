import './App.css';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {

  const ItemList = {
    texto: "Lista de productos"
  }


  const Agregar = () => {
    console.log("un mensaje");
  }


  return (
    <div className="App">
      <NavBar/>
      <Routes>
      <Route path='/' element={<ItemListContainer greeting={ItemList}/>}/>
      <Route path='/detail/:id' element={<ItemDetailContainer/>}/>
      </Routes>
    </div>
  );
}

export default App;
