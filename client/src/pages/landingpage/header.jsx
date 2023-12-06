import React from "react";

const Header = () => {
  return (
    <header className="heaader newhead">
      <a href="/">
        <img
          className="logo"
          alt="Startup logo"
          src="../src/assets/images/logo.png"
        />
      </a>

      <nav className="main-nav">
        <ul className="main-nav-list">
          <li>
            <a className="main-nav-link" href="/">
              Home
            </a>
          </li>
          <li>
            <a className="main-nav-link" href="/about">
              About Us
            </a>
          </li>
          <li>
            <a className="main-nav-link" href="/#testimonials">
              Testimonials
            </a>
          </li>
          <li>
            <a className="main-nav-link" href="/contact">
              Contact Us
            </a>
          </li>
          <li>
            <a className="main-nav-link nav-cta" href="/consumerlogin">
              Login
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
