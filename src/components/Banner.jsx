import React from "react";
import "../styles/Banner.css";

const Banner = ({ title, imageDesktop, imageTablet, imageMobile }) => {
  return (
    <div className="banner">
      <picture>
        {/* Image pour mobile */}
        <source media="(max-width: 576px)" srcSet={imageMobile} />
        {/* Image pour tablette */}
        <source media="(max-width: 992px)" srcSet={imageTablet} />
        {/* Image pour desktop */}
        <img src={imageDesktop} alt={title} className="banner-image" />
      </picture>
      <div className="banner-overlay">
        <h1>{title}</h1>
      </div>
    </div>
  );
};

export default Banner;