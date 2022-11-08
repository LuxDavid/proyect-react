import './App.css';
import  Nav from './components/navBar';
import ItemList from './components/itemList-container';

function App() {
  return (

    <><header className="App-header">
      <div id="portada-inicio">

        <h1>Flash video game store</h1>

      </div>

      <Nav />
    </header>
    
    <section className="App-content">

    <ItemList greeting={"Hola aqui es donde iran los futuros productos"}/>

    </section></>


);
}

export default App;
