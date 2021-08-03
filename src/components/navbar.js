import React from 'react';
import "./navbar.sass";
import CartWidget from './cartWidget';
import SearchBar from './searchBar';


const categories = ['Catalogo', 'Cotizador', 'Contacto', 'Acerca de', 'Log In']



class NavBar extends React.Component{

    renderCategory(category){
        return <li key={category} className={"nav-item"}>
            <a className={"nav-link active"} aria-current={"page"}>{category}</a>
        </li>
    }
    render(){
        return <nav className={"navbar navbar-expand-lg navbar-light bg-soft-yellow"}>
            <div className={"container-fluid"}>
                <a className={"navbar-brand"}>CT@Home</a>
                <button className={"navbar-toggler"} type={"button"} data-bs-toggle={"collapse"} data-bs-target={"#navbarToggler"} aria-controls={"navbarToggler"} aria-expanded={"false"} aria-label={"Toggle navigation"}>
                    <span className={"navbar-toggler-icon"}></span>
                </button>
                <div className={"collapse navbar-collapse"} id={"navbarToggler"}>
                    <ul className={"navbar-nav me-auto mb-2 mb-lg-0"}>
                        {
                        categories.map(category => this.renderCategory(category))
                        }
                    </ul>
                    <SearchBar/>
                </div>
                <CartWidget/>
            </div>
            
        </nav>
    }
}

export default NavBar;