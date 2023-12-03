import logo from "../../assets/images/logo.png";
import "./footer.css";

const Footerland = () => {
  return (
    <div>
      <section>
        <div className="adjust"></div>
      </section>
      <section>
        <footer className="footeer">
          <div className="waves">
            <div className="wave" id="wave1"></div>
            <div className="wave" id="wave2"></div>
            <div className="wave" id="wave3"></div>
            <div className="wave" id="wave4"></div>
          </div>
          <div className="containeeer griidd griidd--footeer sidemmarg">
            <div className="loggo-col">
              <a href="#" className="footeer-logoo">
                <img className="loggo" src={logo} alt="logo" />
              </a>

              <ul className="sociaal-links">
                <li>
                  <a className="footeer-linkk" href="#">
                    <ion-icon
                      className="sociaal-icon"
                      name="logo-instagram"
                    ></ion-icon>
                  </a>
                </li>
                <li>
                  <a className="footeer-linkk" href="#">
                    <ion-icon
                      className="sociaal-icon"
                      name="logo-facebook"
                    ></ion-icon>
                  </a>
                </li>
                <li>
                  <a className="footeer-linkk" href="#">
                    <ion-icon
                      className="sociaal-icon"
                      name="logo-twitter"
                    ></ion-icon>
                  </a>
                </li>
              </ul>

              <p className="copyrrighht">
                Copyright &copy; <span className="year">2027</span> by Locally.
                Inc All rights reserved
              </p>
            </div>
            <div className="address-col">
              <p className="footteer-headinng">Contact us</p>
              <address className="contactts">
                <p className="addreesss">
                  623 Harrison St., 2nd Floor, San Francisco, CA 94107
                </p>
                <p>
                  <a className="footeer-linkk" href="tel:415-201-6370">
                    415-201-6370
                  </a>
                  <br />
                  <a className="footeer-linkk" href="mailto:hello@amanfood.com">
                    hello@locally.com
                  </a>
                </p>
              </address>
            </div>
            <nav className="nav-col">
              <p className="footteer-headinng">Account</p>
              <ul className="footeer-nav">
                <li>
                  <a className="footeer-linkk" href="#">
                    Create account
                  </a>
                </li>
                <li>
                  <a className="footeer-linkk" href="#">
                    Sign in
                  </a>
                </li>
              </ul>
            </nav>
            <nav className="nav-col">
              <p className="footteer-headinng">Company</p>
              <ul className="footeer-nav">
                <li>
                  <a className="footeer-linkk" href="#">
                    About Locally
                  </a>
                </li>
                <li>
                  <a className="footeer-linkk" href="#">
                    For Business
                  </a>
                </li>

                <li>
                  <a className="footeer-linkk" href="#">
                    Careers
                  </a>
                </li>
              </ul>
            </nav>
            <nav className="nav-col">
              <p className="footteer-headinng">Resources</p>
              <ul className="footeer-nav">
                <li>
                  <a className="footeer-linkk" href="#">
                    Help center
                  </a>
                </li>
                <li>
                  <a className="footeer-linkk" href="#">
                    Privacy & terms
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </footer>
      </section>
    </div>
  );
};

export default Footerland;
