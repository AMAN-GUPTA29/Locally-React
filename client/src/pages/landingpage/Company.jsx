import React from "react";

const FeaturedSection = () => {
  return (
    <section className="section-featured slidetrans tochangesize">
      <div className="container tochangesize">
        <h2 className="heading-featured-in tochangesize">As featured in</h2>
        <div className="logos tochangesize">
          <img
            className="logo slidetrans tochangesize"
            src="../src/assets/images/img/logos/techcrunch.png"
            alt="Techcrunch logo"
          />
          <img
            className="logo slidetransl tochangesize"
            src="../src/assets/images/img/logos/business-insider.png"
            alt="Business Insider logo"
          />
          <img
            className="logo slidetrans tochangesize"
            src="../src/assets/images/img/logos/the-new-york-times.png"
            alt="The New York Times logo"
          />
          <img
            className="logo slidetransl tochangesize"
            src="../src/assets/images/img/logos/forbes.png"
            alt="Forbes logo"
          />
          <img
            className="logo slidetrans tochangesize"
            src="../src/assets/images/img/logos/usa-today.png"
            alt="USA Today logo"
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
