import logo from "../images/logo-rpm.png";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="logo rpm autos" className="header__logo" />
      <span className="header__divider"></span>
    </header>
  );
}

export default Header;
