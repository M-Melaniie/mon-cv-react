import React from "react";
import { Accordion } from "react-bootstrap";
import "../styles/MentionsLegales.css";

const MentionsLegales = () => {
  return (
    <section className="mentions-legales">
      <div className="container">
        <h1>MENTIONS LÉGALES</h1>
        <div className="underline"></div>

        <div className="accordion-container">
          <Accordion defaultActiveKey="">
            {/* Éditeur du site */}
            <Accordion.Item eventKey="0">
              <Accordion.Header>Éditeur du site</Accordion.Header>
              <Accordion.Body>
                <div className="info-section">
                  <h3>John Doe</h3>
                  <p>
                    <i className="fas fa-map-marker-alt"></i> 40 Rue Laure Diebold
                    <br /> 69009 Lyon, France
                  </p>
                  <p>
                    <i className="fas fa-phone-alt"></i>{" "}
                    <a href="tel:+33620304050">06 20 30 40 50</a>
                  </p>
                  <p>
                    <i className="fas fa-envelope"></i>{" "}
                    <a href="mailto:john.doe@gmail.com">john.doe@gmail.com</a>
                  </p>
                </div>
              </Accordion.Body>
            </Accordion.Item>

            {/* Hébergeur */}
            <Accordion.Item eventKey="1">
              <Accordion.Header>Hébergeur</Accordion.Header>
              <Accordion.Body>
                <div className="info-section">
                  <h3>Always Data</h3>
                  <p>91 rue du Faubourg Saint-Honoré, 75008 Paris</p>
                  <p>
                    <i className="fas fa-globe"></i>{" "}
                    <a href="https://www.alwaysdata.com" target="_blank" rel="noopener noreferrer">
                      www.alwaysdata.com
                    </a>
                  </p>
                </div>
              </Accordion.Body>
            </Accordion.Item>

            {/* Crédits */}
            <Accordion.Item eventKey="2">
              <Accordion.Header>Crédits</Accordion.Header>
              <Accordion.Body>
                <div className="info-section">
                  <p>Site développé par John Doe, étudiant du CEF.</p>
                  <p>
                    Les images libres de droit sont issues du site{" "}
                    <a href="https://pixabay.com/" target="_blank" rel="noopener noreferrer">
                      Pixabay
                    </a>.
                  </p>
                </div>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default MentionsLegales;