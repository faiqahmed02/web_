import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./secondsection.scss";

function SecondSection(props) {
  return (
    <Container className="second_section_container">
      <Row className="second_section_row">
        <Col sm={12} lg={6} className="second_section_col bg_img"></Col>
        <Col sm={12} lg={6} className="second_section_col">
          <div>
            <h3>{props.ssheading}</h3>
            <p>
              {props.sspara1}
            </p>
            <p>
              {props.sspara2}
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default SecondSection;
