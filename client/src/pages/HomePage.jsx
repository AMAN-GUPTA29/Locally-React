import "./HomePage.css";
import { Fragment } from "react";
import Header from "./landingpage/header";
import HeroSection from "./landingpage/Hero";
import FeaturedSection from "./landingpage/Company";
import CompanyInfoSection from "./landingpage/Info";
import ServicesSection from "./landingpage/Services";

function HomePage() {
  return (
    <Fragment>
      {/* <header classNameName={styles.header}>
        <a href="/">
          <img classNameName={styles.logo} alt="Startup logo" src="images/logo.png" />
        </a>

        <nav classNameName={styles.mainNav}>
          <ul classNameName={styles.mainNavList}>
            <li><a classNameName={styles.mainNavLink} href="/">Home</a></li>
            <li><a classNameName={styles.mainNavLink} href="/about">About Us</a></li>
            <li><a classNameName={styles.mainNavLink} href="/#testimonials">Testimonials</a></li>
            <li><a classNameName={styles.mainNavLink} href="/contact">ContactUs</a></li>
            <li><a classNameName={${styles.mainNavLink} ${styles.navCta}} href="/login">Login</a></li>
          </ul>
        </nav>
      </header> */}
      <Header></Header>
      <HeroSection></HeroSection>
      <div className="testy"></div>
      <FeaturedSection></FeaturedSection>
      <div className="testy"></div>

      <CompanyInfoSection> </CompanyInfoSection>

      <div className="testy"></div>

      <ServicesSection></ServicesSection>

      <div className="testy"></div>
      <section
        className="section-testimonials partsec2 slidetrans"
        id="testimonials"
      >
        <div className="part11">
          <div className="testimonials-container">
            <span className="subheading">Testimonials</span>
            <h2 className="heading-secondary">
              Once you try it, you cant go back
            </h2>

            <div className="testimonials">
              <div className="testi-background slidetrans">
                <figure className="testimonial">
                  <img
                    className="testimonial-img"
                    alt="Photo of customer Dave Bryson"
                    src="images/img/customers/dave.jpg"
                  />
                  <blockquote className="testimonial-text">
                    {
                      "Exceptional service! The team was punctual and efficient. Our home looks amazing. Highly recommend this locally."
                    }
                  </blockquote>
                  <p className="testimonial-name">&mdash; Dave Bryson</p>
                </figure>
              </div>

              <div className="testi-background slidetrans">
                <figure className="testimonial">
                  <img
                    className="testimonial-img"
                    alt="Photo of customer Ben Hadley"
                    src="images/img/customers/ben.jpg"
                  />
                  <blockquote className="testimonial-text">
                    {
                      "Quick response and professional work. The technician fixed our issue swiftly. Were thrilled with the service!"
                    }
                  </blockquote>
                  <p className="testimonial-name">&mdash; Ben Hadley</p>
                </figure>
              </div>

              <div className="testi-background slidetrans">
                <figure className="testimonial">
                  <img
                    className="testimonial-img"
                    alt="Photo of customer Steve Miller"
                    src="images/img/customers/steve.jpg"
                  />
                  <blockquote className="testimonial-text">
                    {
                      "Reliable childcare support. Our nanny is wonderful and trustworthy. A true blessing for busy parents in our community."
                    }
                  </blockquote>
                  <p className="testimonial-name">&mdash; Steve Miller</p>
                </figure>
              </div>

              <div className="testi-background slidetrans">
                <figure className="testimonial">
                  <img
                    className="testimonial-img"
                    alt="Photo of customer Hannah Smith"
                    src="images/img/customers/hannah.jpg"
                  />
                  <blockquote className="testimonial-text">
                    {
                      "Great local eats! The restaurant offers delicious dishes and warm ambiance. A must-visit spot in our neighborhood."
                    }
                  </blockquote>
                  <p className="testimonial-name">&mdash; Hannah Smith</p>
                </figure>
              </div>
            </div>
          </div>
        </div>
        <div className="part22">
          <div className="gallery">
            {/* <% for(let i=0; i < 15; i++){ %>
            <figure className="gallery-item slidetrans">
              <img src="images/image/allservice/<%= i+1 %>.jpg" alt="Photo of beautifully
                  arranged food" />
            </figure>
            <% } %> */}
          </div>
        </div>
      </section>
      <section className="slidetrans">
        <div className="seller-login">
          <h2 className="heading-secondary marghead">
            Wanna become a service provider click below
          </h2>
          <div className="container grid grid--2-cols grid--center-v">
            <div>
              <p className="step-description">
                {
                  " Local service providers, seize the opportunity to thrive on our platform. Connect with a community hungry for local expertise. Whether it's home services, culinary delights, or  professional assistance, we offer the tools and support for your local business to flourish. Join us today and together, we'll strengthen our community while boosting your business's success. Be part of something extraordinary—connect and grow your local presence now!"
                }
              </p>
            </div>
            <div>
              <a
                href="/seller/login"
                className="btn btn--full margin-right-sm margbutton"
              >
                Get started
              </a>
            </div>
          </div>
        </div>
      </section>
      <section>{/* <div className="modify"></div> */}</section>
    </Fragment>
  );
}

export default HomePage;
