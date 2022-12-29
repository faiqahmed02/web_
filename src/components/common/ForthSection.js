import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./forthsection.scss";
import Slider from "react-slick";
import Information from "../../Objects/PackageObject";

function ForthSection() {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    // centerPadding: "60px",
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 5000,
    cssEase: "linear",
    arrow: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const Data = Information.LogoPackages;
  return (
    <Container className="forth_section_container">
      <Row className="forth_section_row">
        <Col className="forth_section_col">
          <h3>Hire logo branding online at a reasonable price</h3>
          <p>
            We ensure that our online logo branding service packages will fall
            under your budget while providing you with top-notch quality and 99%
            Satisfaction.
          </p>
        </Col>
      </Row>
      <Row>
        <Slider {...settings}>
          {Data.map((d, i) => {
            return (
              <div className="package">
                <h3 className="package_cat">{d.data.Package.Cat}</h3>
                <h4 className="package_price">$ {d.data.Package.price}</h4>
                <p className="package_description">
                  {d.data.Package.description}
                </p>
                <ul className="package_list">
                  {d.data.Package.list.map((d, i) => {
                    return <li>{d}</li>;
                  })}
                </ul>
                <button className="package_btn">Get Started</button>
              </div>
            );
          })}
        </Slider>
      </Row>
    </Container>
  );
}

export default ForthSection;
