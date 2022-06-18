import './styles.css';

import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import Locations from './components/Locations/Locations';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
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
            <Route path='/' element={ <Home /> }/>
            <Route path='/menu' element={ <ItemListContainer /> }/>
            <Route path='/menu/:categoryId' element={ <ItemListContainer /> } />
            <Route path='/detalle/:productId' element={ <ItemDetailContainer /> } />
            <Route path='/locales' element={ <Locations /> }/>
            <Route path='/contacto' element={ <Contact /> }/>
            <Route path='/cart' element={ <Cart /> } />
            <Route path='*' element={ <NotA404 /> }/>
          </Routes>
          <Footer />
        </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;
