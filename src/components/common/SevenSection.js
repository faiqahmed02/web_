import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import Slider from "react-slick";
import "./sevensection.scss";
import { HiArrowLongLeft, HiArrowLongRight } from "react-icons/hi2";

function SevenSection() {
  const settings2 = {
    // className: "center",

    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 5000,
    cssEase: "linear",
    arrow: true,
    nextArrow: <HiArrowLongRight fill="black" />,
    prevArrow: <HiArrowLongLeft fill="black" />,
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
  return (
    <Container fluid className="seven_section_container g-0">
      <Container>
        <Row className="seven_section_row">
          <Col sm={12} lg={4} className="seven_section_col">
            <h3 className="heading_2">But don't take our word for it</h3>
            <p>Hear it from the clients, their real experiences.</p>
          </Col>
        </Row>
        <Row className="seven_section_row seven_slider_row">
          <Col className="seven_section_col">
            <Slider {...settings2}>
              <div>
                <div className="testimonoals_slider">
                  <div className="testimonoals_slider_inner_div">
                    <p>
                      Logo experts at Websodesign Web Solutions use cutting-edge
                      tools and years of expertise in various logo designing
                      concepts. The design team works on a project with a
                      detailed approach and streamlined process.
                    </p>
                    <h5>Perter Anderson</h5>
                    <div className="rate">
                      <input type="radio" id="star5" name="rate" value="5" />
                      <label for="star5" title="text">
                        5 stars
                      </label>
                      <input type="radio" id="star4" name="rate" value="4" />
                      <label for="star4" title="text">
                        4 stars
                      </label>
                      <input type="radio" id="star3" name="rate" value="3" />
                      <label for="star3" title="text">
                        3 stars
                      </label>
                      <input type="radio" id="star2" name="rate" value="2" />
                      <label for="star2" title="text">
                        2 stars
                      </label>
                      <input type="radio" id="star1" name="rate" value="1" />
                      <label for="star1" title="text">
                        1 star
                      </label>
                    </div>
                    <Image
                      src={require("../../assets/images/Services/Logo/Quote Red.webp")}
                    />
                  </div>
                </div>
              </div>
              <div>
                <div className="testimonoals_slider">
                  <div className="testimonoals_slider_inner_div">
                    <p>
                      Logo experts at Websodesign Web Solutions use cutting-edge
                      tools and years of expertise in various logo designing
                      concepts. The design team works on a project with a
                      detailed approach and streamlined process.
                    </p>
                    <h5>Perter Anderson</h5>
                    <div className="rate">
                      <input type="radio" id="star5" name="rate" value="5" />
                      <label for="star5" title="text">
                        5 stars
                      </label>
                      <input type="radio" id="star4" name="rate" value="4" />
                      <label for="star4" title="text">
                        4 stars
                      </label>
                      <input type="radio" id="star3" name="rate" value="3" />
                      <label for="star3" title="text">
                        3 stars
                      </label>
                      <input type="radio" id="star2" name="rate" value="2" />
                      <label for="star2" title="text">
                        2 stars
                      </label>
                      <input type="radio" id="star1" name="rate" value="1" />
                      <label for="star1" title="text">
                        1 star
                      </label>
                    </div>
                    <Image
                      src={require("../../assets/images/Services/Logo/Quote Red.webp")}
                    />
                  </div>
                </div>
              </div>
              <div>
                <div className="testimonoals_slider">
                  <div className="testimonoals_slider_inner_div">
                    <p>
                      Logo experts at Websodesign Web Solutions use cutting-edge
                      tools and years of expertise in various logo designing
                      concepts. The design team works on a project with a
                      detailed approach and streamlined process.
                    </p>
                    <h5>Perter Anderson</h5>
                    <div className="rate">
                      <input type="radio" id="star5" name="rate" value="5" />
                      <label for="star5" title="text">
                        5 stars
                      </label>
                      <input type="radio" id="star4" name="rate" value="4" />
                      <label for="star4" title="text">
                        4 stars
                      </label>
                      <input type="radio" id="star3" name="rate" value="3" />
                      <label for="star3" title="text">
                        3 stars
                      </label>
                      <input type="radio" id="star2" name="rate" value="2" />
                      <label for="star2" title="text">
                        2 stars
                      </label>
                      <input type="radio" id="star1" name="rate" value="1" />
                      <label for="star1" title="text">
                        1 star
                      </label>
                    </div>
                    <Image
                      src={require("../../assets/images/Services/Logo/Quote Red.webp")}
                    />
                  </div>
                </div>
              </div>
            </Slider>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default SevenSection;
