import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import Slider from "react-slick";
import "./sixthsection.scss";

function SixthSection() {
  const settings = {
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    arrow: true,
    vertical: true,
    verticalSwiping: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
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
  return (
    <Container className="sexth_section_conatiner">
      <Row className="sexth_section_row">
        <Col className="sexth_section_col" sm={12} lg={6}>
          <div>
            <h3>Reason to Choose Us</h3>
            <p>
              We are obliged to provide an incredible experience by creating
              impressive logo branding online services. What makes us
              trustworthy partners? Here are the reasons!
            </p>
          </div>
        </Col>
        <Col className="sexth_section_col" sm={12} lg={6}>
          <div>
            <Slider {...settings}>
              <div>
                <div className="sild_style">
                  <Image
                    src={require("../../assets/images/Services/Logo/choose-1.webp")}
                    width={"auto"}
                  />
                  <h4>Vector Made Designs</h4>
                  <p>
                    Each design is entirely vector-based and may be delivered in
                    either.AI or .EPS formats
                  </p>
                </div>
              </div>
              <div>
                <div className="sild_style">
                  <Image
                    src={require("../../assets/images/Services/Logo/choose-2.webp")}
                    width={"auto"}
                  />
                  <h4>Vector Made Designs</h4>
                  <p>
                    Each design is entirely vector-based and may be delivered in
                    either.AI or .EPS formats
                  </p>
                </div>
              </div>
              <div>
                <div className="sild_style">
                  <Image
                    src={require("../../assets/images/Services/Logo/choose-1.webp")}
                    width={"auto"}
                  />
                  <h4>Vector Made Designs</h4>
                  <p>
                    Each design is entirely vector-based and may be delivered in
                    either.AI or .EPS formats
                  </p>
                </div>
              </div>
              <div>
                <div className="sild_style">
                  <Image
                    src={require("../../assets/images/Services/Logo/choose-2.webp")}
                    width={"auto"}
                  />
                  <h4>Vector Made Designs</h4>
                  <p>
                    Each design is entirely vector-based and may be delivered in
                    either.AI or .EPS formats
                  </p>
                </div>
              </div>
            </Slider>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default SixthSection;
