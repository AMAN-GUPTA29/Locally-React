import React from "react";

const Header = () => {
  return (
    <header className="heaader newhead tochangesize">
      <a href="/">
        <img
          className="logo "
          alt="Startup logo"
          src="../src/assets/images/logo.png"
        />
      </a>

      <nav className="main-nav tochangesize">
        <ul className="main-nav-list tochangesize">
          <li>
            <a className="main-nav-link tochangesize" href="/">
              Home
            </a>
          </li>
          <li>
            <a className="main-nav-link tochangesize" href="/about">
              AboutUs
            </a>
          </li>
          <li>
            <a className="main-nav-link tochangesize" href="/#testimonials">
              Testimonials
            </a>
          </li>
          <li>
            <a className="main-nav-link tochangesize" href="/contact">
              ContactUs
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
