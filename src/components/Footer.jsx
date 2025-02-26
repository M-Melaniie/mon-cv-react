import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Footer.css";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

function Footer() {
  const location = useLocation(); // Récupérer l'URL actuelle
  const [showButton, setShowButton] = useState(false);

  // Afficher/Masquer le bouton "Retour vers le haut"
  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fonction pour gérer le scroll ou la redirection
  const handleScroll = (sectionId) => {
    if (location.pathname === "/") {
      // On est sur Home, donc on scrolle directement
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Si on est sur une autre page, on redirige vers Home avec l'ancre
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
            <li><a href="#">Fresh food</a></li>
            <li><a href="#">Restaurant Akira</a></li>
            <li><a href="#">Espace bien-être</a></li>
          </ul>
        </div>

        {/* Colonne 4 : Derniers articles */}
        <div className="footer-column">
          <h4>Mes derniers articles</h4>
          <ul>
            <li><a href="#">Coder son site en HTML/CSS</a></li>
            <li><a href="#">Vendre ses produits sur le web</a></li>
            <li><a href="#">Se positionner sur Google</a></li>
          </ul>
        </div>
      </div>

      {/* Copyright et bouton retour en haut */}
      <div className="footer-bottom">
        <p>© Designed by John Doe</p>
        {showButton && (
          <a href="#" className="back-to-top">Retour vers le haut ↑</a>
        )}
      </div>
    </footer>
  );
}

export default Footer;