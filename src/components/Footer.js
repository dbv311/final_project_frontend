import "./Footer.css";
import facebookLogo from "../images/facebook_white.svg";
import instagramLogo from "../images/instagram_white.svg";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__social">
        <h2 class="footer__social-heading">Redes sociales</h2>
        <ul class="footer__list">
          <li class="footer__list-item">
            <a
              class="footer__social-link"
              href="https://web.facebook.com/people/RPM-Autos/61554824131760/?locale=es_LA"
            >
              <img
                src={facebookLogo}
                alt="Facebook logo"
                class="footer__social-icon"
              />
              Facebook
            </a>
          </li>
          <li class="footer__list-item">
            <a
              class="footer__social-link"
              href="https://www.instagram.com/rpmautos.cl/"
            >
              <img
                src={instagramLogo}
                alt="Instagram logo"
                class="footer__social-icon"
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
