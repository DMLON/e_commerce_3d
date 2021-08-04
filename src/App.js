import NavBar from './components/navbar'
import './App.sass';
import ItemListContainer from "./components/itemListContainer"

function App() {
  return <div>
    <NavBar/>
    <ItemListContainer greeting={"Items"}></ItemListContainer>
  </div>
}

export default App;
