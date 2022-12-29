import React from "react";
import { Container } from "react-bootstrap";
import OwlCarousel from "react-owl-carousel-rtl";

function FifthSection() {
  return (
    <Container className="section_7">
      <div className="container-fluid">
        <div className="row">
          <div className="col text-center">
            <h4>A glimpse of work</h4>
            <h2 data-aos="fade-up" className="heading_2">
              Our Latest Creative <span>Work</span>
            </h2>
          </div>
        </div>
        <div
          className="row g-0"
          // onFocus={MouseEnter}
        >
          <OwlCarousel
            className="owl-carousel-3"
            loop={false}
            nav={true}
            margin={10}
            responsive={responsive2}
            rtl={true}
            rtlClass={"owl-rtl"}
            mousewheel
            // mousewheel
          >
            <div className="image-slider">
              <img src={require("../../assets/images/S6-1.webp")} />
            </div>
            <div className="image-slider">
              <img src={require("../../assets/images/S6-2.webp")} />
            </div>
            <div className="image-slider">
              <img src={require("../../assets/images/S6-1.webp")} />
            </div>
            <div className="image-slider">
              <img src={require("../../assets/images/S6-2.webp")} />
            </div>
            <div className="image-slider">
              <img src={require("../../assets/images/S6-1.webp")} />
            </div>
          </OwlCarousel>
        </div>
      </div>
    </Container>
  );
}

export default FifthSection;
