import "./style.css"
import { Link } from 'react-router-dom';

function Menu() {
    return (
        <nav className="c-menu">
          <Link to="/">Lista</Link>
          <Link to="/capturados">Capturados</Link>
          <Link to="/aleatorios">Aleatorio</Link>
          <Link to="/usuarios">Usuarios</Link>
          <Link to="/favoritos">Favoritos</Link>
          <Link to="/admin">Administrador</Link>
        </nav>
    )
  }
  
  export default Menu