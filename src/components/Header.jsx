import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "../styles/Header.css"; 

function Header() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Fonction pour gérer l'ouverture/fermeture du menu burger
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Fonction pour fermer le menu après un clic sur un lien
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container">
        {/* LOGO */}
        <Link className="navbar-brand" to="/">JOHN DOE</Link>

        {/* MENU BURGER */}
        <button 
          className={`navbar-toggler ${isMenuOpen ? "" : "collapsed"}`} 
          type="button" 
          onClick={toggleMenu}
          aria-controls="navbarNav" 
          aria-expanded={isMenuOpen} 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* MENU */}
        <div className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`} id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} to="/" onClick={closeMenu}>ACCUEIL</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === "/services" ? "active" : ""}`} to="/services" onClick={closeMenu}>SERVICES</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === "/realisations" ? "active" : ""}`} to="/realisations" onClick={closeMenu}>RÉALISATIONS</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === "/blog" ? "active" : ""}`} to="/blog" onClick={closeMenu}>BLOG</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === "/contact" ? "active" : ""}`} to="/contact" onClick={closeMenu}>ME CONTACTER</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;