import React from "react";

const HeroSection = () => {
  return (
    <section className="section-hero slidetrans">
      <div className="hero">
        <div className="hero-white">
          <div className="hero-text-box">
            <h1 className="heading-primary heading-main">
              Get things done with our trusted local professionals
            </h1>
            <p className="hero-description discription-main">
              Discover and connect with local businesses effortlessly on
              Locally. Strengthen your community by supporting and exploring
              neighborhood gems. Your local journey starts here.
            </p>

            <div className="butt-main">
              <a href="/login" className="btn btn--full margin-right-sm">
                Get started
              </a>

              <a href="#how" className="btn btn--outline">
                Learn more &darr;
              </a>
            </div>
          </div>
          <div className="delivered-meals">
            <div className="delivered-imgs">
              <img
                src="../src/assets/images/img/customers/customer-1.jpg"
                alt="Customer photo"
              />
              <img
                src="../src/assets/images/img/customers/customer-2.jpg"
                alt="Customer photo"
              />
              <img
                src="../src/assets/images/img/customers/customer-3.jpg"
                alt="Customer photo"
              />
              <img
                src="../src/assets/images/img/customers/customer-4.jpg"
                alt="Customer photo"
              />
              <img
                src="../src/assets/images/img/customers/customer-5.jpg"
                alt="Customer photo"
              />
              <img
                src="../src/assets/images/img/customers/customer-6.jpg"
                alt="Customer photo"
              />
            </div>
            <p className="delivered-text">
              <span>250,000+</span> Happy Customers
            </p>
          </div>
        </div>
        <div className="hero-img-box">
          <picture>
            <source
              srcSet="../src/assets/images/img/hero.webp"
              type="images/image/webp"
            />
            <source
              srcSet="../src/assets/images/img/hero-min.png"
              type="images/image/png"
            />

            {/* <img
              src="img/hero-min.png"
              className="hero-img"
              alt="Woman enjoying food, meals in storage container, and food bowls on a table"
            /> */}
          </picture>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
