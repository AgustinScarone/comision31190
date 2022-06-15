/*import logo from './logo.svg';*/
import './styles.css';

import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import NotA404 from './components/Assets/NotA404';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartContextProvider } from './context/CartContext';

const App = () => {
  return (
    <div>
      <CartContextProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path='/menu' element={ <ItemDetailContainer /> }/>
            <Route path='/locales' element={ <ItemDetailContainer /> }/>
            <Route path='/contacto' element={ <ItemDetailContainer /> }/>
            <Route path='/categoria/:categoryId' element={ <ItemListContainer /> } />
            <Route path='/detalle/:productId' element={ <ItemDetailContainer /> } />
            <Route path='/cart' element={ <Cart /> } />
            <Route path='/' element={ <ItemListContainer /> }/>
            <Route path='*' element={ <NotA404 /> }/>
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;
