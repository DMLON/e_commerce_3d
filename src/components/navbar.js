import React from 'react';
import "./navbar.sass";

// Uso un espacio vacio ya que necesito que sea así por el flex grow y para que no moleste con el hover cursor
const categories = ['Catalogo', 'Cotizador', 'Contacto', 'Acerca de', "", 'Log In']



class NavBar extends React.Component{
    render(){
        return <div className={"navBar"}>
            <h1>CT@Home</h1>
            {
            categories.map(category => <p onClick={()=>console.log(category)} className={"navItem"}>{category}</p>)
            }
        </div>
    }
}

export default NavBar;