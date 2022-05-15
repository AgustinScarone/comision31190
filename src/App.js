/*import logo from './logo.svg';*/
import './styles.css';

import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting="BUM" />
    </div>
  );
}

export default App;
