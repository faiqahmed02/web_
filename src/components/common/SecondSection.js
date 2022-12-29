import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./secondsection.scss";

function SecondSection() {
  return (
    <Container className="second_section_container">
      <Row className="second_section_row">
        <Col sm={12} lg={6} className="second_section_col bg_img"></Col>
        <Col sm={12} lg={6} className="second_section_col">
          <div>
            <h3>Logo branding online</h3>
            <p>
              The logo visual explains your brand identity so there is no need
              to explain what you do just show who you are with strong visuals.
              Online logo branding ideas will help you get creative logo designs
              since we keep your brand vibe in mind so you can get the ideas for
              your own logo, whether you run a construction company or a
              basement brand our professionals will create your logo in a short
              period of time with uniqueness.
            </p>
            <p>
              We believe that a brand is an idea, an association, and the basis
              for all of your marketing initiatives. A powerful message is sent
              to the right audience by an effective brand experience, inspiring
              people to act.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default SecondSection;
