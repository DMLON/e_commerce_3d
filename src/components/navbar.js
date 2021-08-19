import React from "react";
import "./navbar.sass";
import CartWidget from "./cartWidget";
import SearchBar from "./searchBar";
import { Link, NavLink } from "react-router-dom";

const categories = [
    {name:"Catalogo",link:"/"}, 
    {name:"Cotizador",link:"/cotization"}, , 
    {name:"Contacto",link:"/contact"},  
    {name:"Acerca de",link:"/about"}, , 
    {name:"Log In",link:"/login"}, ];

function NavBarToggler(props) {
    return (
        <div>
            <button
                className={"navbar-toggler"}
                type={"button"}
                data-bs-toggle={"collapse"}
                data-bs-target={`#${props.target}`}
                aria-controls={props.target}
                aria-expanded={"false"}
                aria-label={"Toggle navigation"}
            >
                <span className={"navbar-toggler-icon"}></span>
            </button>
        </div>
    );
}

class NavBar extends React.Component {
    renderCategory(category) {
        return (
            <li key={category.name} className={"nav-item"}>
                <NavLink exact activeClassName="selected-link" className={"nav-link active"} to={category.link} aria-current={"page"}>
                    {category.name}
                </NavLink>
            </li>
        );
    }
    render() {
        return (
            <nav className={"navbar navbar-expand-lg navbar-light bg-soft-yellow"}>
                <div className={"container-fluid"}>
                    <Link to="/" className={"navbar-brand"}>CT@Home</Link>
                    <NavBarToggler target={"navbarToggler"}/>
                    <div className={"collapse navbar-collapse"} id={"navbarToggler"}>
                        <ul className={"navbar-nav me-auto mb-2 mb-lg-0"}>
                            {categories.map((category) => this.renderCategory(category))}
                        </ul>
                        <NavLink className="nav-link" exact activeClassName="selected-link" to="/cart">
                            <CartWidget />
                        </NavLink>
                        
                    </div>
                    {/* https://codepen.io/thalesmelo/pen/LRYwQo */}
                </div>
            </nav>
        );
    }
}

export default NavBar;
