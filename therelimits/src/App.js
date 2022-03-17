import ItemDetailContainer from './components/container/ItemDetail/ItemDetailContainer';
import './App.css';
import ItemListContainer from './components/container/ItemListContainer';
import NavBar from './layout/NavBar.jsx';
import { CartContextProvider }from './components/context/CartContext';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

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
        </Routes>
    </Router>
    </CartContextProvider>
    </>
  );
}

export default App;
