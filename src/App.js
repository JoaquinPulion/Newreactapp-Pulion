import './App.css';
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
      <ItemListContainer greeting={ItemList}/>
      <ItemDetailContainer/>
    </div>
  );
}

export default App;
