import './App.css';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter } from 'react-router-dom';
import ItemCount from './components/ItemCount';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { Cart } from './components/CartView/Cart';
import CartProvider from './Context/CartContext';

function App() {

  const ItemList = {
    texto: "Lista de productos"
  }


  const Agregar = () => {
    console.log("un mensaje");
  }


  return (
    <div className="App">
      <BrowserRouter>
      <CartProvider>
      <NavBar/>
      <Routes>
      <Route path='/' element={<ItemListContainer greeting={ItemList}/>}/>
      <Route path='/categoria/:IdCategoria' element={<ItemListContainer greeting={ItemList}/>}/>
      <Route path='/detail/:id' element={<ItemDetailContainer/>}/>
      <Route path='/cart' element={<Cart/>} />
      </Routes>
      </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
