import "./Navigation.css";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav className="nav">
      <p className="nav__container">
        <Link to="home" className="nav__link">
          Inicio
        </Link>
        <Link to="cars" className="nav__link">
          Autos
        </Link>
      </p>
    </nav>
  );
}

export default Navigation;
