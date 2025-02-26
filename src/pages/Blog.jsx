import React from "react";
import Coder from "../assets/images/blog/coder.jpg";
import Croissance from "../assets/images/blog/croissance.jpg";
import Google from "../assets/images/blog/google.jpg";
import Screens from "../assets/images/blog/screens.jpg";
import Seo from "../assets/images/blog/seo.jpg";
import Techno from "../assets/images/blog/technos.png";
import Banner from "../components/Banner"; 
import ImageDesktop from "../assets/images/banner/banner.jpg";
import ImageTablet from "../assets/images/banner/banner-tablette.jpg";
import ImageMobile from "../assets/images/banner/banner-mobile.jpg";
import "../styles/Blog.css";

const Blog = () => {
  return (
    <div> 
      <Banner 
        title="BLOG"
        imageDesktop={ImageDesktop}
        imageTablet={ImageTablet}
        imageMobile={ImageMobile}
      />

      <section className="blog">
        <h1>BLOG</h1>
        <p>Retrouvez ici quelques articles sur le développement web.</p>
        <div className="underline"></div>

        <div className="blog-grid">
          {/* === Projet 1 === */}
          <div className="blog-item">
            <img src={Coder} alt="Coder" />
            <div className="card-content">
              <h3>Coder son site en HTML/CSS</h3>
              <p>Quelques bases pour bien démarrer en développement web.</p>
              <button className="btn-primary">Lire la suite</button>
            </div>
            <p className="publication-date">Publié le 22 août 2022</p>
          </div>

          {/* === Projet 2 === */}
          <div className="blog-item">
            <img src={Croissance} alt="Croissance" />
            <div className="card-content">
              <h3>Vendre ses produits sur le web</h3>
              <p>Comment optimiser votre boutique en ligne pour booster vos ventes.</p>
              <button className="btn-primary">Lire la suite</button>
            </div>
            <p className="publication-date">Publié le 20 août 2022</p>
          </div>

          {/* === Projet 3 === */}
          <div className="blog-item">
            <img src={Google} alt="Google" />
            <div className="card-content">
              <h3>Se positionner sur Google</h3>
              <p>Les techniques de référencement essentielles pour votre site.</p>
              <button className="btn-primary">Lire la suite</button>
            </div>
            <p className="publication-date">Publié le 1 août 2022</p>
          </div>

          {/* === Projet 4 === */}
          <div className="blog-item">
            <img src={Screens} alt="Screens" />
            <div className="card-content">
              <h3>Coder en responsive design</h3>
              <p>Les bonnes pratiques pour un site adapté à tous les écrans.</p>
              <button className="btn-primary">Lire la suite</button>
            </div>
            <p className="publication-date">Publié le 31 juillet 2022</p>
          </div>

          {/* === Projet 5 === */}
          <div className="blog-item">
            <img src={Seo} alt="SEO" />
            <div className="card-content">
              <h3>Techniques de référencement</h3>
              <p>Améliorez la visibilité de votre site sur les moteurs de recherche.</p>
              <button className="btn-primary">Lire la suite</button>
            </div>
            <p className="publication-date">Publié le 30 juillet 2022</p>
          </div>

          {/* === Projet 6 === */}
          <div className="blog-item">
            <img src={Techno} alt="Techno" />
            <div className="card-content">
              <h3>Apprendre à coder</h3>
              <p>Les meilleures ressources pour apprendre le développement web.</p>
              <button className="btn-primary">Lire la suite</button>
            </div>
            <p className="publication-date">Publié le 12 juillet 2022</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;