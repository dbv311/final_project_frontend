import "./Footer.css";
import facebookLogo from "../images/facebook_white.svg";
import instagramLogo from "../images/instagram_white.svg";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__social">
        <h2 className="footer__social-heading">Redes sociales</h2>
        <ul className="footer__list">
          <li className="footer__list-item">
            <a
              className="footer__social-link"
              href="https://web.facebook.com/people/RPM-Autos/61554824131760/?locale=es_LA"
            >
              <img
                src={facebookLogo}
                alt="Facebook logo"
                className="footer__social-icon"
              />
              Facebook
            </a>
          </li>
          <li className="footer__list-item">
            <a
              className="footer__social-link"
              href="https://www.instagram.com/rpmautos.cl/"
            >
              <img
                src={instagramLogo}
                alt="Instagram logo"
                className="footer__social-icon"
              />
              Instagram
            </a>
          </li>
        </ul>
      </div>
      &copy; 2024 Daniela Bohorquez
    </footer>
  );
}

export default Footer;
