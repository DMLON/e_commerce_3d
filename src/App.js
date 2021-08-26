import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from './components/navbar'
import './App.sass';
import ItemListContainer from "./components/itemListContainer"
import ItemDetailContainer from "./components/itemDetailContainer";
import About from "./routes/about"
import Login from "./routes/login"
import Contacto from "./routes/contacto"
import Cotizador from "./routes/cotizador"
import Cart from "./routes/cart"
import { CartProvider } from "./components/cartContext";



// ["Catalogo", "Cotizador", "Contacto", "Acerca de", "Log In"];

function App() {
    return (
    <CartProvider>
        <BrowserRouter>
            <NavBar/>
            <Switch>
                <Route exact path="/about">
                    <About/>
                </Route>
                <Route exact path="/contact">
                    <Contacto/>
                </Route>
                <Route exact path="/cotization">
                    <Cotizador/>
                </Route>
                <Route exact path="/login">
                    <Login/>
                </Route>
                <Route exact path="/cart">
                    <Cart/>
                </Route>
                <Route exact path="/item/:itemId">
                    <ItemDetailContainer/>
                </Route>
                <Route exact path="/category/:category">
                    <ItemListContainer/>
                </Route>
                <Route path="/">
                    <ItemListContainer/>
                </Route>
            </Switch>
        </BrowserRouter>
    </CartProvider>
    );
    
}

export default App;