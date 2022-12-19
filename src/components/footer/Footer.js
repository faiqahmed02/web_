import React from "react";

function Footer() {
  return (
    <footer id="footer" className="foot_1">
      <div className="container">
        <div className="row">
          <div className="col-md-4 footer_col_1">
            <img
              className="logo"
              src={require("../../assets/images/Footer Logo.webp")}
            />
            <p>
              Websodesign Web Solution is one of the leading web design and
              development companies in the USA. Websodesign Web Solution serves
              as the one-window solution provider for all web-relevant needs of
              businesses and individuals working smartly to establish your
              online presence!
            </p>
          </div>
          <div className="col-md-4 footer_col">
            <h3 data-aos="fade-up">Contacts</h3>
            <ul className="list-group">
              <div className="contact-us">
                <i className="fa fa-phone"></i>
                <li>+1 203-920-4829</li>
              </div>
              <div className="contact-us">
                <i className="fa fa-envelope"></i>
                <li>support@websodesign.com</li>
              </div>
              <div className="contact-us">
                <i className="fa fa-map-marker"></i>
                <li className="address">
                  152 Church Street 19th Floor, New <br />
                  Haven, CT 06510
                </li>
              </div>
            </ul>
            <div className="footer-icons" style={{marginTop: '20px'}}>
              <img
                className="social-icon"
                src={require("../../assets/images/facebook.png")}
              />
              <img
                className="social-icon"
                src={require("../../assets/images/twitter.png")}
              />
              <img
                className="social-icon"
                src={require("../../assets/images/instagram.png")}
              />
            </div>
          </div>
          <div className="col-md-2 footer_col">
            <h3 data-aos="fade-up">Services</h3>
            <ul className="list-group">
              <li>Logo Design</li>
              <li>Website</li>
              <li>Branding</li>
              <li>Animation</li>
              <li>SEO Audit</li>
            </ul>
          </div>
          <div className="col-md-2 footer_col">
            <h3 data-aos="fade-up">Community</h3>
            <ul className="list-group">
              <li>Our Product</li>
              <li>Documentation</li>
              <li>Our Services</li>
              <li>Company</li>
              <li>What We Do?</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container-fluid bottom_nav">
        <div className="row">
          <div className="col ">
            <h2 data-aos="fade-up">2022 - Webso Design. All Right Reserved</h2>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
