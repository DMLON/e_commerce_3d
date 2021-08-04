import React from "react";
import "./navbar.sass";
import CartWidget from "./cartWidget";
import SearchBar from "./searchBar";

const categories = ["Catalogo", "Cotizador", "Contacto", "Acerca de", "Log In"];

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
            <li key={category} className={"nav-item"}>
                <a className={"nav-link active"} aria-current={"page"}>
                    {category}
                </a>
            </li>
        );
    }
    render() {
        return (
            <nav className={"navbar navbar-expand-lg navbar-light bg-soft-yellow"}>
                <div className={"container-fluid"}>
                    <a className={"navbar-brand"}>CT@Home</a>
                    <NavBarToggler target={"navbarToggler"}/>
                    <div className={"collapse navbar-collapse"} id={"navbarToggler"}>
                        <ul className={"navbar-nav me-auto mb-2 mb-lg-0"}>
                            {categories.map((category) => this.renderCategory(category))}
                        </ul>
                        <CartWidget />
                    </div>
                    {/* https://codepen.io/thalesmelo/pen/LRYwQo */}
                </div>
            </nav>
        );
    }
}

export default NavBar;
