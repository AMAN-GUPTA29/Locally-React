import React from "react";
import logo from "./assets/imgs/logo.png";
import "./assets/Navbar.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default () => {
  const navigate = useNavigate();
  return (
    <header className="headeer">
      <a href="/customerView">
        <img className="loggo" alt="Startup logo" src={logo} />
      </a>

      <nav className="maiin-naav">
        <ul className="maiin-naav-lisst">
          <li>
            <Link className="maiin-naav-linnk" to="/chat" target="_blank">
              Chat
            </Link>
          </li>
          <li>
            <Link className="maiin-naav-linnk" to="/customerrequest">
              MyRequest
            </Link>
          </li>
          <li>
            <Link className="maiin-naav-linnk" to="/history">
              History
            </Link>
          </li>
          <li>
            <a className="maiin-naav-linnk" href="/broadcast">
              Notifications
            </a>
          </li>
          <li>
            <Link className="maiin-naav-linnk" to="/">
              Logout
            </Link>
          </li>
          <li>
            <a className="maiin-naav-linnk naav-ctta" href="/profile">
              Profile
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
