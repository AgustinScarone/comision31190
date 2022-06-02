/*import logo from './logo.svg';*/
import './styles.css';

import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import NotA404 from './components/NotA404/NotA404';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/menu' element={ <ItemDetailContainer /> }/>
          <Route path='/locales' element={ <ItemDetailContainer /> }/>
          <Route path='/contacto' element={ <ItemDetailContainer /> }/>
          <Route path='/categoria/:categoryId' element={ <ItemListContainer /> } />
          <Route path='/detalle/:productId' element={ <ItemDetailContainer /> } />
          <Route path='/' element={ <ItemListContainer /> }/>
          <Route path='*' element={ <NotA404 /> }/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
