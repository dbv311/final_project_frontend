import logo from "../images/logo-rpm.png";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="logo rpm autos" className="header__logo" />

      <div className="header__container">
        <p className="header__info">Automotora RPM</p>
        <p className="header__info">Compra, venta y consignación de autos</p>
      </div>
    </header>
  );
}

export default Header;
