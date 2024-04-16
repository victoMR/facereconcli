import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkedAlt,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import {
  faTiktok,
  faWhatsapp,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import "../styles/footer.css";

function year() {
  return new Date().getFullYear();
}

export default function Footer() {
  return (
    <div className="footer">
      <div className="footerText">
        <div className="fHeader">
          <div className="fHeader1">Contactanos</div>
          <ul className="fBody">
            <li>manuelrm.ti22@utjsr.edu.mx</li>
            <li>abrilsc.ti22@utsjr.edu.mx</li>
            <li>carlospd.ti22@utsjr.edu.mx</li>
            <li>agustincg.ti22@utsjr.edu.mx</li>
          </ul>
        </div>
        <div className="fHeader">
          <div className="fHeader1">Links de interes</div>
          <ul className="fBody">
            <li>FAQ</li>
            <li>Blog</li>
            <li>Foro</li>
          </ul>
        </div>
        <div className="fHeader">
          <div className="fHeader1">Contactanos</div>
          <ul className="fBody">
            <li>Telefono: 123456789</li>
            <li>
              Email:
              <a href="mailto:si@com.com">si@com.com</a>
            </li>
            <li>Direccion: Calle Falsa 123</li>
          </ul>
        </div>
        {/* ICONOS DE REDES SOCIALES TIKTOK, MAPS, WHATS, FACEBOOK, INSTA, MAIL, TELEFONO  */}
        <div className="redesSociales">
          <a href="https://www.tiktok.com/">
            <FontAwesomeIcon icon={faTiktok} />
          </a>
          <a href="https://www.google.com/maps">
            <FontAwesomeIcon icon={faMapMarkedAlt} />
          </a>
          <a href="https://web.whatsapp.com/">
            <FontAwesomeIcon icon={faWhatsapp} />
          </a>
          <a href="https://www.facebook.com/">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="https://www.instagram.com/">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="mailto:">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
          <a href="tel:123456789">
            <FontAwesomeIcon icon={faPhone} />
          </a>
        </div>
        <div className="legal">
          <a href="/">Aviso legal</a>
          <br></br>
          <a href="/">Politica de cookies</a>
        </div>
        <div className="copyRight">
          <p>© {year()} Todos los derechos reservados</p>
        </div>
      </div>
    </div>
  );
}
