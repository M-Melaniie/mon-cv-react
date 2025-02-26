import React from "react";
import FreshFood from "../assets/images/portfolio/fresh-food.jpg";
import RestaurantAkira from "../assets/images/portfolio/restaurant-japonais.jpg";
import EspaceBienEtre from "../assets/images/portfolio/espace-bien-etre.jpg";
import Banner from "../components/Banner";
import ImageDesktop from "../assets/images/banner/banner.jpg";
import ImageTablet from "../assets/images/banner/banner-tablette.jpg";
import ImageMobile from "../assets/images/banner/banner-mobile.jpg";
import "../styles/Realisations.css"; 

function Realisations() {
  return (
    <div>
      {/* Bannière */}
      <Banner 
        title="MES RÉALISATIONS"
        imageDesktop={ImageDesktop}
        imageTablet={ImageTablet}
        imageMobile={ImageMobile}
      />

      <section className="portfolio">
        <h1>PORTFOLIO</h1>
        <p>Voici quelques-unes de mes réalisations.</p>
        <div className="underline"></div>

        <div className="portfolio-grid">
          {/* === Projet 1 === */}
          <div className="portfolio-item">
            <img src={FreshFood} alt="Fresh Food" />
            <div className="card-content">
              <h3>Fresh Food</h3>
              <p>Réalisation d’un site avec commande en ligne.</p>
              <button className="btn-primary">Voir</button>
            </div>
            <p className="tech">Site réalisé avec PHP et MySQL</p>
          </div>

          {/* === Projet 2 === */}
          <div className="portfolio-item">
            <img src={RestaurantAkira} alt="Restaurant Akira" />
            <div className="card-content">
              <h3>Restaurant Akira</h3>
              <p>Réalisation d’un site vitrine.</p>
              <button className="btn-primary">Voir</button>
            </div>
            <p className="tech">Site réalisé avec WordPress</p>
          </div>

          {/* === Projet 3 === */}
          <div className="portfolio-item">
            <img src={EspaceBienEtre} alt="Espace Bien-Être" />
            <div className="card-content">
              <h3>Espace Bien-Être</h3>
              <p>Réalisation d’un site vitrine pour un praticien de bien-être.</p>
              <button className="btn-primary">Voir</button>
            </div>
            <p className="tech">Site réalisé en HTML/CSS</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Realisations;