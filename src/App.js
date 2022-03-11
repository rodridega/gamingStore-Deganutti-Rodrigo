import Navbar from './components/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import './App.css';



function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer greeting={'Bienvenido a V-Gaming'} />
    </div>
  );
}

export default App;
