import ItemDetailContainer from './components/container/ItemDetail/ItemDetailContainer';
import './App.css';
import ItemListContainer from './components/container/ItemList/ItemListContainer';
import NavBar from './layout/NavBar.jsx';
import { CartContextProvider }from './components/context/CartContext';
import Cart from './components/container/Cart/Cart';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import CartForm from './components/container/Cart/CartForm';


function App() {
  return (
    <>
    <CartContextProvider>
    <Router>
    <NavBar/>
        <Routes>
          <Route path="/" element={<ItemListContainer name='Bienvenido a therelimits'/>}/>
          <Route path="/category/:categoryid" element={ <ItemListContainer name ="Bategoria de products"/>}/>
          <Route path="/item/:id" element={<ItemDetailContainer/>} />
          <Route path="/cart" element={ <Cart/> }/>
          <Route path="/form" element={ <CartForm/> }/>
        </Routes>
    </Router>
    </CartContextProvider>
    </>
  );
}

export default App;
