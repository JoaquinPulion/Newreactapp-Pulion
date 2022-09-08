import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';

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
      
    </div>
  );
}

export default App;
