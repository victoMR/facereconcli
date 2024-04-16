import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/header.css";
import logo from "../images/ImgLogo.png";
import Hamburger from "hamburger-react";

function goHome() {
  window.location.href = "/";
}

export default function Header() {
  const [isOpen, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(!isOpen); // Cambiar el estado isOpen al valor opuesto
  };

  return (
    <div className="navbar">
      {/* Logo */}
      <img
        className="navbarBrand"
        src={logo}
        alt="FaceRecon"
        onClick={goHome}
      />

      <nav className={`navbarContent ${isOpen ? "show" : ""}`}>
        <>
          {/* <ul>
            <li className="navbarItem">
              <Link to="/">Inicio</Link>
            </li>
            <li className="navbarItem">
              <Link to="/charts">Graficas</Link>
            </li>
          </ul> */}
          {/* Hamburger menu */}
          <div className="hamburgerMenu" onClick={handleToggle}>
            <Hamburger toggled={isOpen} />
          </div>
        </>
      </nav>
    </div>
  );
}
