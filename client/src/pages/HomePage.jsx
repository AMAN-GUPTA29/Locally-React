import "./HomePage.css";
import { Fragment } from "react";
import Header from "./landingpage/header";
import HeroSection from "./landingpage/Hero";
import FeaturedSection from "./landingpage/Company";
import CompanyInfoSection from "./landingpage/Info";
import ServicesSection from "./landingpage/Services";
import TestimonialsSection from "./landingpage/rating";
import SellerLoginSection from "./landingpage/sellerlogin";
// import Footer from "./../shay-component/Footer";
import Footerland from "./landingpage/footer";

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
      <TestimonialsSection></TestimonialsSection>
      <SellerLoginSection></SellerLoginSection>
      <Footerland />
    </Fragment>
  );
}

export default HomePage;
