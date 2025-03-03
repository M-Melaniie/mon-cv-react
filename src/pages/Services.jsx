import React from "react";
import { FaFileCode, FaSearchDollar, FaDesktop } from "react-icons/fa";
import "../styles/Services.css";

function Services() {
  return (
    <section className="services">
      <div className="container">
        {/* Titre principal */}
        <h2 className="section-title">MON OFFRE DE SERVICES</h2>
        <p className="section-subtitle">
          Voici les prestations sur <strong>lesquelles</strong> je peux intervenir.
        </p>
        <div className="underline"></div> 

        {/* Cartes de services */}
        <div className="services-grid">
          {/* UX Design */}
          <div className="service-card">
            <FaDesktop className="service-icon" />
            <h3>UX DESIGN</h3>
            <p>
              L'<strong>UX Design</strong> est une méthode de conception centrée sur l’utilisateur. Son but est d’offrir une expérience de navigation optimale à l’internaute.
            </p>
          </div>

          {/* Développement Web */}
          <div className="service-card">
            <FaFileCode className="service-icon" />
            <h3>DÉVELOPPEMENT WEB</h3>
            <p>
              Le <strong>développement de sites web</strong> repose sur l’utilisation des langages 
              <button className="link-button" onClick={(e) => e.preventDefault()}>HTML</button>, 
              <button className="link-button" onClick={(e) => e.preventDefault()}>CSS</button>, 
              <button className="link-button" onClick={(e) => e.preventDefault()}>JavaScript</button> et 
              <button className="link-button" onClick={(e) => e.preventDefault()}>PHP</button>.
            </p>
          </div>

          {/* Référencement */}
          <div className="service-card">
            <FaSearchDollar className="service-icon" />
            <h3>RÉFÉRENCEMENT</h3>
            <p>
              Le <strong>référencement naturel</strong> d’un site, aussi appelé 
              <button className="link-button" onClick={(e) => e.preventDefault()}>SEO</button>, 
              consiste à mettre en œuvre des techniques pour <em>améliorer sa position</em> 
              dans les résultats des moteurs de recherche.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;