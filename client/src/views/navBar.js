import "./navBar.css";
import SearchBar from "../components/SearchBar";
import { Link } from "react-router-dom";


const Nav_Bar = ()=>{

    return(
        <div className="nav-bar">
            <div className="estilo">
            <img className="logo" src="https://1000marcas.net/wp-content/uploads/2020/01/Pok%C3%A9mon-Logotipo.jpg" alt="logo" />
            <button className="nav-buttons" onClick><Link to="/about">Conocer más</Link></button>
            < SearchBar />
            <button className="nav-buttons" onClick><Link to="/form">¡Crea tu Pokémon!</Link></button>
            </div>
        </div>       
    )
}

export default Nav_Bar;