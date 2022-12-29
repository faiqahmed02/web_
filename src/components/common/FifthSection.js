import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import OwlCarousel from "react-owl-carousel-rtl";
import $ from "jquery";
import './fifthsection.scss'

function FifthSection() {
    const [btnActive, setBtnActive] = useState('logo');
  const responsive2 = {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    960: {
      items: 2,
    },
    1200: {
      items: 2,
    },
  };
  const owl = $(".owl-carousel");
  owl.on("mousewheel", ".owl-stage", function (e) {
    if (e.originalEvent.wheelDelta > 0) {
      owl.trigger(OwlCarousel.next());
    } else {
      owl.trigger(this.prev.owl);
    }
    e.preventDefault();
  });

  const btnevent = (d) => {
    if(d === 'website'){
        setBtnActive('website')
    }
    if(d === 'dm'){
        setBtnActive('dm')
    }
    if(d === 'logo'){
        setBtnActive('logo')
    }


  }

  return (
    <Container className="fifth_section_container section_7">
      <Container fluid>
        <Row className="row">
          <div className="col text-center">
            <h4>A glimpse of work</h4>
            <h2 data-aos="fade-up" className="heading_2">
              Our Latest Creative <span>Work</span>
            </h2>
          </div>
        </Row>
        <Row
          className="row g-0"
          // onFocus={MouseEnter}
        >
          <Col sm={12} lg={12}>
            <ul className="portfolio_nav d-flex justify-content-center m-auto pb-5">
              <li>
                <Button onClick={() => btnevent('website')} className={btnActive === 'website' ? 'active' : ""} variant="primary">Website</Button>
              </li>
              <li>
                <Button onClick={() => btnevent('dm')} className={btnActive === 'dm' ? 'active' : ""} variant="primary">Digital Marketing</Button>
              </li>
              <li>
                <Button onClick={() => btnevent('logo')} className={btnActive === 'logo' ? 'active' : ""} variant="primary">Logo</Button>
              </li>
            </ul>
          </Col>
          <Col>
            <OwlCarousel
              className="owl-carousel-3"
              loop={false}
              nav={true}
              margin={10}
              responsive={responsive2}
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
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default FifthSection;
