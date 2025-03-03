import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Footer.css";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

function Footer() {
  const location = useLocation();
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = (sectionId) => {
    if (location.pathname === "/") {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.location.href = `/#${sectionId}`;
    }
  };

  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Colonne 1 : Infos Contact */}
        <div className="footer-column">
          <h4>John Doe</h4>
          <p>40 Rue Laure Diebold</p>
          <p>69009 Lyon, France</p>
          <p>Téléphone : 06 20 30 40 50</p>
          <div className="social-icons">
            <a href="https://github.com/github-john-doe" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href="https://twitter.com/john-doe" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <FaTwitter />
            </a>
            <a href="https://linkedin.com/in/john-doe" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Colonne 2 : Liens utiles */}
        <div className="footer-column">
          <h4>Liens utiles</h4>
          <ul>
            <li><a href="/" onClick={(e) => { e.preventDefault(); handleScroll("top"); }}>Accueil</a></li>
            <li><a href="/" onClick={(e) => { e.preventDefault(); handleScroll("about"); }}>À propos</a></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/contact">Me contacter</Link></li>
            <li><Link to="/mentions-legales">Mentions légales</Link></li>
          </ul>
        </div>

        {/* Colonne 3 : Dernières réalisations */}
        <div className="footer-column">
          <h4>Mes dernières réalisations</h4>
          <ul>
            <li><Link to="/realisations#fresh-food">Fresh food</Link></li>
            <li><Link to="/realisations#restaurant-akira">Restaurant Akira</Link></li>
            <li><Link to="/realisations#espace-bien-etre">Espace bien-être</Link></li>
          </ul>
        </div>

        {/* Colonne 4 : Derniers articles */}
        <div className="footer-column">
          <h4>Mes derniers articles</h4>
          <ul>
            <li><Link to="/blog#coder-html-css">Coder son site en HTML/CSS</Link></li>
            <li><Link to="/blog#vendre-produits-web">Vendre ses produits sur le web</Link></li>
            <li><Link to="/blog#seo-google">Se positionner sur Google</Link></li>
          </ul>
        </div>
      </div>

      {/* Copyright et bouton retour en haut */}
      <div className="footer-bottom">
        <p>© Designed by John Doe</p>
        {showButton && (
          <button className="back-to-top" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            Retour vers le haut ↑
          </button>
        )}
      </div>
    </footer>
  );
}

export default Footer;