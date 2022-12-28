import React from "react";
import { Col, Container, Form, Row, Image } from "react-bootstrap";
import "./banner.scss";

function Banner() {
  return (
    <Container className="banner_services">
      <Row className="banner_row_services">
        <Col className="banner_col_services" sm={12} lg={6}>
          <div className="">
            <h1>
              Hire <span>logo</span> branding online like no others
            </h1>
            <p>
              No matter what industry you belong to our logo branding online
              service will provide a logo that’s a perfect match for your
              business
            </p>
            <div>
              <button className="get_started">Get Started</button>
              <button className="get_started">Live Chat</button>
            </div>
            <div className="banner_img">
              <Image
                src={require("../../assets/images/Services/Logo/awards-logo.webp")}
                alt="Logo"
              />
            </div>
          </div>
        </Col>
        <Col className="banner_col_services" sm={12} lg={6}>
          <div className="banner_form">
            <h3>Get upto 70% discount</h3>
            <h2>Let’s Start a New Project Together</h2>
            <form>
              <input type="text" placeholder="First Name" />
              <input type="text" placeholder="Last Name" />
              <input type="email" placeholder="Email" />
              <input type="number" placeholder="Phone" />
              <input
                className="get_started"
                type="submit"
                value="Get Free Consultancy"
              />
            </form>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Banner;
