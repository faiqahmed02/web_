import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header
      id="header"
      className="bg-transparent"
      style={{ position: "absolute", top: 0, width: "100%" }}
    >
      <div className="container justify-content-between">
        <div className="row">
          <div className="col-sm-3 m-auto">
            <img
              className="logo"
              src={require("../../assets/images/Main Banner Logo.webp")}
            />
          </div>
          <div className="col-md-9">
            <nav id="navbar" className="navbar">
              <ul>
                <li>
                  <Link className="nav-link" to="#hero">
                    Home
                  </Link>
                </li>
                <li>
                  <a className="nav-link" href="#about">
                    About
                  </a>
                </li>
                <li>
                  <Link className="nav-link" to='/services/logo'>
                    Logo
                  </Link>
                </li>
                <li>
                  <Link className="nav-link" to='/services/website'>
                    Wesbite
                  </Link>
                </li>
                <li>
                  <Link className="nav-link" href='/services/ecommerce-wesbite'>
                    Ecommerce
                  </Link>
                </li>
                <li>
                  <a className="nav-link" href="#portfolio">
                    Portfolio
                  </a>
                </li>
                <li>
                  <a className="nav-link" href="#team">
                    Packages
                  </a>
                </li>
                <li>
                  <a className="nav-link" href="#contact">
                    Contact Us
                  </a>
                </li>
              </ul>
              <i className="bi bi-list mobile-nav-toggle"></i>
            </nav>
          </div>
          {/* <!-- <div className="col-md-8 number">
                    <ul className="list-group blink-num">
                        <a href="tel:12039204829"><li><i className="fa fa-phone"></i>+1-203-920-4829</li></a>
                    </ul>
                </div>
                <div className="col headre-btn">
                    <a href="#" className="btn btn-warning get_started">CHAT NOW</a>
                </div> --> */}
        </div>
      </div>
    </header>
  );
}

export default Header;
