import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from './components/navbar'
import './App.sass';
import ItemListContainer from "./components/itemListContainer"
import ItemDetailContainer from "./components/itemDetailContainer";




// ["Catalogo", "Cotizador", "Contacto", "Acerca de", "Log In"];

function App() {
    return (
    <BrowserRouter>
        <NavBar/>
        <Switch>
            <Route path="/cart"/>
            <Route path="/item/:itemId">
                <ItemDetailContainer/>
            </Route>
            <Route exact path="/">
                <ItemListContainer/>
            </Route>
        </Switch>
    </BrowserRouter>
    );
    
}

export default App;