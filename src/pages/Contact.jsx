import React from "react";
import "../styles/Contact.css";

const Contact = () => {
  return (
    <section className="contact">
      <div className="contact-container">
        <h1>ME CONTACTER</h1>
        <p>
          Pour me contacter en vue d'un entretien ou d'une future collaboration,
          merci de remplir le formulaire de contact.
        </p>
        <div className="underline"></div>

        <div className="contact-content">
          {/* === Formulaire === */}
          <div className="contact-form">
            <h3>Formulaire de contact</h3>
            <form>
              <input type="text" placeholder="Votre nom" required />
              <input type="email" placeholder="Votre adresse email" required />
              <input type="tel" placeholder="Votre numéro de téléphone" required />
              <input type="text" placeholder="Sujet" required />
              <textarea placeholder="Votre message" required></textarea>
              <button type="submit" className="btn-primary">Envoyer</button>
            </form>
          </div>

          {/* === Coordonnées === */}
          <div className="contact-info">
            <h3>Mes coordonnées</h3>
            <p>📍 40 Rue Laure Diebold, 69009 Lyon, France</p>
            <p>📞 06 20 30 40 50</p>
            <div className="map-container">
              <iframe
                title="Google Maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2888.4179041967433!2d4.805003115503306!3d45.77703507910569!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4c069d9df5c21%3A0xb6d00f69ec4d28c8!2s40%20Rue%20Laure%20Diebold%2C%2069009%20Lyon%2C%20France!5e0!3m2!1sfr!2sfr!4v1645737227479!5m2!1sfr!2sfr"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;