import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function NineSection() {
  return (
    <Container fluid className="section_6">
      <div className="container">
        <div className="row">
          <Col sm={12} lg={9} className="m-auto">
            <h2 data-aos="fade-up" className="heading_2">
              Let's Right People Portray Your Brand in <span>Right Style!</span>{" "}
            </h2>
            <p>
              Level up your business and grow the profits with design <br />&
              marketing strategies that reflect your organization's goals.
            </p>
            <a href="#about" className="get_started">
              Get Started
            </a>
            <a href="#about" className="get_started">
              Live Chat
            </a>
          </Col>
        </div>
      </div>
    </Container>
  );
}

export default NineSection;
