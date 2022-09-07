import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {

  const ItemList = {
    texto: "Lista de productos"
  }


  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greeting={ItemList}/>
    </div>
  );
}

export default App;
