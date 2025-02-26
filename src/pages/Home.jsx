import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";
import aboutImage from "../assets/images/about/john-doe-about.jpg"; 

function Home() {
  return (
    <div id="top">
    <div className="home-container">
      {/* Section Hero */}
      <section className="hero">
        <div className="overlay"></div>
        <div className="hero-content">
          <h1>Bonjour, je suis John Doe</h1>
          <h2>Développeur web full stack</h2>
          <a href="#about" className="btn-primary">En savoir plus</a>
        </div>
      </section>

      {/* Section À propos */}
      <section id="about" className="about">
        <div className="about-container">
          {/* Texte de présentation */}
          <div className="about-text">
            <h3>À propos</h3>
            <p>
              Passionné par l'informatique et les nouvelles technologies, j'ai suivi une formation 
              d'<strong>intégrateur-développeur web</strong> au CEF. 
              <br /> Au cours de cette formation, j'ai pu acquérir des bases solides pour travailler 
              dans le domaine du <strong>développement web</strong>.
            </p>
            <p>
              Basé à Lyon, je suis en recherche d’une alternance au sein d'une agence digitale 
              pour consolider ma formation de <strong>développeur web full stack</strong>.
            </p>
            <p>
              J'accorde une attention particulière à la qualité du code que j’écris 
              et je respecte les bonnes pratiques du web.
            </p>
          </div>

          {/* Image et compétences */}
          <div className="about-skills">
            <img src={aboutImage} alt="John Doe" className="profile-img" />
            
            <div className="skills">
              <h4>Mes compétences</h4>
              <div className="skill">
                <span>HTML5</span>
                <div className="progress">
                  <div className="progress-bar html" style={{width: "90%"}}>90%</div>
                </div>
              </div>
              <div className="skill">
                <span>CSS3</span>
                <div className="progress">
                  <div className="progress-bar css" style={{width: "80%"}}>80%</div>
                </div>
              </div>
              <div className="skill">
                <span>JavaScript</span>
                <div className="progress">
                  <div className="progress-bar js" style={{width: "70%"}}>70%</div>
                </div>
              </div>
              <div className="skill">
                <span>PHP</span>
                <div className="progress">
                  <div className="progress-bar php" style={{width: "60%"}}>60%</div>
                </div>
              </div>
              <div className="skill">
                <span>React</span>
                <div className="progress">
                  <div className="progress-bar react" style={{width: "50%"}}>50%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    </div>
  );
}

export default Home;