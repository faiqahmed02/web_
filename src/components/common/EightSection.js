import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./eightsection.scss";
function EightSection() {
  return (
    <Container className="eight_section_container">
      <Row className="eight_section_row">
        <Col className="eight_section_col text-center">
          <h3 className="heading_2">How We Create Outstanding Logos</h3>
          <p>
            Logo experts at Websodesign Web Solutions use cutting-edge tools and
            years of expertise in various logo designing concepts. The design
            team works on a project with a detailed approach and streamlined
            process.
          </p>
        </Col>
      </Row>
      <Row className="eight_section_row">
        <span></span>
        <Row>
          <Col className="eight_section_col" sm={12} lg={6}>
            <div className="eight_bg_img_1"></div>
          </Col>
          <Col className="eight_section_col" sm={12} lg={6}>
            <div className="content_div m-auto ">
              <h3 className="heading_2">Communication with The Client</h3>
              <p>
                We believe in being as transparent as possible, which is why we
                not only share our experience with you but also ensure that we
                communicate with you at all times when working on your projects.
              </p>
            </div>
          </Col>
        </Row>
        <Row className="eight_section_row">
          <Col className="eight_section_col" sm={12} lg={6}>
            <div className="content_div m-auto">
              <h3 className="heading_2">
                Brainstorming to Produce a Top Class Logo
              </h3>
              <p>
                We don't make logos or websites; instead, we build and craft
                solutions for your brands that are tailored to your needs and
                satisfy modern standards.
              </p>
            </div>
          </Col>
          <Col className="eight_section_col" sm={12} lg={6}>
            <div className="eight_bg_img_2"></div>
          </Col>
        </Row>
        <Row className="eight_section_row">
          <Col className="eight_section_col" sm={12} lg={6}>
            <div className="eight_bg_img_3"></div>
          </Col>
          <Col className="eight_section_col" sm={12} lg={6}>
            <div className="content_div m-auto ">
              <h3 className="heading_2">It's time for Execution</h3>
              <p>
                Our team of logo design specialists heads on in the most
                frictionless way possible, ensuring to provide you impressive
                logos according to your business requirement.
              </p>
            </div>
          </Col>
        </Row>
        <Row className="eight_section_row">
          <Col className="eight_section_col" sm={12} lg={6}>
            <div className="content_div m-auto ">
              <h3 className="heading_2">
                Final Delivery with Quality Assurance
              </h3>
              <p>
                We never release a product without first putting in place a
                quality assurance (QA) methodology. We strive for perfection in
                the delivery of your website.
              </p>
            </div>
          </Col>
          <Col className="eight_section_col" sm={12} lg={6}>
            <div className="eight_bg_img_4"></div>
          </Col>
        </Row>
      </Row>
    </Container>
  );
}

export default EightSection;
