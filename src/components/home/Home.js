import React, { useState } from "react";
import ReactOwlCarousel from "react-owl-carousel/umd/OwlCarousel";
import "../../assets/style.css";
import { Col, Container, Row } from "react-bootstrap";
import $ from "jquery";
import OwlCarousel from "react-owl-carousel-rtl";
function Home() {
  const [opecity, setOpacity] = useState("Website");
  //   owl.ReactOwlCarousel({
  //     loop={true}
  //     nav={true}
  //     margin={10}
  //     rtl={true}
  // OwlCarousel.next()
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
  //   );

  const owl = $(".owl-carousel-3");

  React.useEffect(() => {
    // owl.on("mousewheel", ".owl-stage", function (e) {
    //   if (e.deltaY > 0) {
    //     owl.trigger("next.owl");
    //   } else {
    //     owl.trigger("prev.owl");
    //   }
    //   e.preventDefault();
    // });
  }, []);

  const MouseEnter = () => {};
  owl.on("mousewheel", ".owl-stage", function (e) {
    if (e.deltaY > 0) {
      owl.next();
      console.log("function worked");
    } else {
      owl.prev();
    }
    e.preventDefault();
  });
  const responsive = {
    0: {
      items: 1,
    },

    600: {
      items: 1,
      width: "100%",
    },

    1024: {
      items: 7,
    },

    1366: {
      items: 7,
    },
  };

  const Opacity = (e) => {
    setOpacity(e);
  };

  return (
    <>
      <Container id="hero">
        <div className="hero-container">
          <div className="container">
            <div className="row">
              <div className="col-md-6 banner">
                <div className="banner_content">
                  <h1 className="banner_heading">
                    On Your Marks.
                    <br />
                    Get Set. <span>Grow.</span>
                  </h1>
                  <p className="banner_text">
                    Level up your business and grow the profits with design
                    <br />& marketing strategies that reflect your
                    organization's goals.
                  </p>
                  <a href="#about" className="get_started">
                    Know More
                  </a>
                  <div className="logos">
                    <img src={require("../../assets/images/4 Logos .webp")} />
                  </div>
                </div>
              </div>
              <div className="col-md-6 g-0 owl-carousel-4">
                <div className="slider-image">
                  <Row className="g-0">
                    <Col sm={6}>
                      <div className="marquee">
                        <div className="marquee-content">
                          <div className="marquee-item">
                            <Row>
                              <Col>
                                <img
                                  src={require("../../assets/images/S1-1.webp")}
                                />
                                <img
                                  src={require("../../assets/images/S1-2.webp")}
                                />
                                <img
                                  src={require("../../assets/images/S1-3.webp")}
                                />
                                <img
                                  src={require("../../assets/images/S1-4.webp")}
                                />
                                <img
                                  src={require("../../assets/images/S1-5.webp")}
                                />
                                <img
                                  src={require("../../assets/images/S1-6.webp")}
                                />
                              </Col>
                            </Row>
                          </div>
                        </div>
                      </div>
                    </Col>
                    <Col sm={6}>
                      <div className="marquee">
                        <div className="marquee-content2">
                          <div className="marquee-item">
                            <Row>
                              <Col>
                                <img
                                  src={require("../../assets/images/S1-4.webp")}
                                />
                                <img
                                  src={require("../../assets/images/S1-5.webp")}
                                />
                                <img
                                  src={require("../../assets/images/S1-6.webp")}
                                />
                                <img
                                  src={require("../../assets/images/S1-1.webp")}
                                />
                                <img
                                  src={require("../../assets/images/S1-2.webp")}
                                />
                                <img
                                  src={require("../../assets/images/S1-3.webp")}
                                />
                              </Col>
                            </Row>
                          </div>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container fluid className="section_2">
        {/* <div className="container-fluid"> */}
        <div className="row">
          <div className="col-md-6 image g-0 bag_prod "></div>
          <div className="col-md-6 about m-auto">
            <h2 data-aos="fade-up" className="heading_2">
              Best <span>Web Designing</span> Agency <br />
              in the USA with Qualified <br />
              Experts
            </h2>
            <p>
              Want your business to rule the digital marketplace? For that, you
              need a bespoke website that speaks for your brand. Websodesign Web
              Solution is a leading web design agency that designs innovative
              and effective websites that capture the soul of your business and
              help with conversions.
            </p>
          </div>
        </div>
        {/* </div> */}
      </Container>
      <Container fluid className="section_3">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="tab">
                <button
                  className="tablinks"
                  onMouseEnter={() => Opacity("Website")}
                  onMouseLeave={() => Opacity()}
                >
                  <span>01</span> WEBSITE
                </button>
                <button
                  className="tablinks"
                  // onmouseover={}
                  onMouseEnter={() => Opacity("ecommerce")}
                  onMouseLeave={() => Opacity()}
                >
                  <span>02</span> ECOMMERCE
                </button>
                <button
                  className="tablinks"
                  onMouseEnter={() => Opacity("logos")}
                  onMouseLeave={() => Opacity()}
                >
                  <span>03</span> LOGOS
                </button>
                <button
                  className="tablinks"
                  onMouseEnter={() => Opacity("webportal")}
                  onMouseLeave={() => Opacity()}
                >
                  <span>04</span> WEB PORTALS
                </button>
                <button
                  className="tablinks"
                  onMouseEnter={() => Opacity("digitalmarketing")}
                  onMouseLeave={() => Opacity()}
                >
                  <span>05</span> DIGITAL MARKETING
                </button>
              </div>

              <div
                id="London"
                className={
                  "Website" === opecity ? "tabcontent opacity" : "tabcontent"
                }
              >
                <img
                  src={require("../../assets/images/S2-Trendy Urben Mockup.webp")}
                  className="img-fluid"
                  data-aos-duration="1000"
                  data-aos="fade-left"
                />
              </div>

              <div
                id="Paris"
                className={
                  "ecommerce" === opecity ? "tabcontent opacity" : "tabcontent"
                }
                data-aos-duration="1000"
                data-aos="fade-left"
              >
                <img
                  src={require("../../assets/images/S1-2.webp")}
                  className="img-fluid"
                />
              </div>

              <div
                id="Tokyo"
                className={
                  "logos" === opecity ? "tabcontent opacity" : "tabcontent"
                }
                data-aos-duration="1000"
                data-aos="fade-left"
              >
                <img
                  src={require("../../assets/images/S1-3.webp")}
                  className="img-fluid"
                />
              </div>

              <div
                id="Portals"
                className={
                  "webportal" === opecity ? "tabcontent opacity" : "tabcontent"
                }
                data-aos-duration="1000"
                data-aos="fade-left"
              >
                <img
                  src={require("../../assets/images/S1-4.webp")}
                  className="img-fluid"
                />
              </div>

              <div
                id="Market"
                className={
                  "digitalmarketing" === opecity
                    ? "tabcontent opacity"
                    : "tabcontent"
                }
                data-aos-duration="1000"
                data-aos="fade-left"
              >
                <img
                  src={require("../../assets/images/S1-5.webp")}
                  className="img-fluid"
                />
              </div>
            </div>
            {/* <!-- <div className="col-md-8">
              <img
                src={require("../../assets/images/S2-Trendy Urben Mockup.webp")}
                className="img-fluid"
              />
            </div> --> */}
          </div>
        </div>
      </Container>
      <Container fluid className="section_4">
        <div className="container">
          <div className="row sec_4_row">
            <div className="m-auto">
              <div className="col icon_box">
                <h2 data-aos="fade-up" className="heading_2">
                  Contact Our Professional Brand & <br />
                  Website Design Consultants
                </h2>
                <a href="#about" className="get_started">
                  Live Chat
                </a>
              </div>
              <div className="row sec-icon-1">
                <div className="col-md-3">
                  <div className="icon_bg">
                    <i className="fa fa-rocket"></i>
                    <h3 data-aos="fade-up">15+</h3>
                    <p>Years in Business</p>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="icon_bg">
                    <i className="fa fa-hand-o-right"></i>
                    <h3 data-aos="fade-up">100+</h3>
                    <p>Team Members</p>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="icon_bg">
                    <i className="fa fa-heart"></i>
                    <h3 data-aos="fade-up">800+</h3>
                    <p>Happy Clients</p>
                  </div>
                </div>
              </div>
              <div className="row sec-icon-2">
                <div className="col-md-3">
                  <div className="icon_bg">
                    <i className="fa fa-tv"></i>
                    <h3 data-aos="fade-up">10k+</h3>
                    <p>Projects Done</p>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="icon_bg">
                    <i className="fa fa-users"></i>
                    <h3 data-aos="fade-up">50k+</h3>
                    <p>Hours Worked</p>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="icon_bg">
                    <i className="fa fa-paper-plane"></i>
                    <h3 data-aos="fade-up">24/7</h3>
                    <p>Support Available</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container></Container>
      <Container fluid className="section_6">
        <div className="container">
          <div className="row">
            <div className="col">
              <h2 data-aos="fade-up" className="heading_2">
                Let's Start a <span>New Project</span> <br />
                Together
              </h2>
              <p>
                Level up your business and grow the profits with design <br />&
                marketing strategies that reflect your organization's goals.
              </p>
              <a href="#about" className="get_started">
                Live Chat
              </a>
            </div>
          </div>
        </div>
      </Container>
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
      <Container className="section_8">
        <div className="container-fluid">
          <div className="row">
            <div className="col text-center">
              <h4>Our Prestigious Clients</h4>
              <h2 data-aos="fade-up" className="heading_2">
                Some Of Our <span>Clients</span>
              </h2>
            </div>
          </div>
          <div className="row g-0 owl-carousel-1">
            <ReactOwlCarousel
              className="owl-theme"
              autoplay={true}
              rewind={true}
              margin={0}
              responsiveClass={true}
              loop={true}
              smartSpeed={10000}
              center={true}
              dots={false}
              nav={false}
              responsive={responsive}
            >
              <div className="logo-slider">
                <img src={require("../../assets/images/1.webp")} />
              </div>
              <div className="logo-slider">
                <img src={require("../../assets/images/2.webp")} />
              </div>
              <div className="logo-slider">
                <img src={require("../../assets/images/3.webp")} />
              </div>
              <div className="logo-slider">
                <img src={require("../../assets/images/4.webp")} />
              </div>
              <div className="logo-slider">
                <img src={require("../../assets/images/5.webp")} />
              </div>
              <div className="logo-slider">
                <img src={require("../../assets/images/6.webp")} />
              </div>
              <div className="logo-slider">
                <img src={require("../../assets/images/7.webp")} />
              </div>
            </ReactOwlCarousel>
          </div>

          <div className="row g-0 owl-carousel-2">
            <OwlCarousel
              className="owl-theme"
              autoplay={true}
              margin={0}
              responsiveClass={true}
              loop={true}
              smartSpeed={10000}
              center={true}
              dots={false}
              nav={false}
              responsive={responsive}
              rtlClass="owl-rtl"
              rtl={true}
            >
              <div className="logo-slider">
                <img src={require("../../assets/images/8.webp")} />
              </div>
              <div className="logo-slider">
                <img src={require("../../assets/images/9.webp")} />
              </div>
              <div className="logo-slider">
                <img src={require("../../assets/images/10.webp")} />
              </div>
              <div className="logo-slider">
                <img src={require("../../assets/images/11.webp")} />
              </div>
              <div className="logo-slider">
                <img src={require("../../assets/images/12.webp")} />
              </div>
              <div className="logo-slider">
                <img src={require("../../assets/images/13.webp")} />
              </div>
              <div className="logo-slider">
                <img src={require("../../assets/images/14.webp")} />
              </div>
            </OwlCarousel>
          </div>
          <div className="row g-0 owl-carousel-1">
            <ReactOwlCarousel
              className="owl-theme"
              autoplay={true}
              rewind={true}
              margin={0}
              responsiveClass={true}
              loop={true}
              smartSpeed={10000}
              center={true}
              dots={false}
              nav={false}
              responsive={responsive}
            >
              <div className="logo-slider">
                <img src={require("../../assets/images/15.webp")} />
              </div>
              <div className="logo-slider">
                <img src={require("../../assets/images/16.webp")} />
              </div>
              <div className="logo-slider">
                <img src={require("../../assets/images/17.webp")} />
              </div>
              <div className="logo-slider">
                <img src={require("../../assets/images/18.webp")} />
              </div>
              <div className="logo-slider">
                <img src={require("../../assets/images/19.webp")} />
              </div>
              <div className="logo-slider">
                <img src={require("../../assets/images/20.webp")} />
              </div>
              <div className="logo-slider">
                <img src={require("../../assets/images/21.webp")} />
              </div>
              <div className="logo-slider">
                <img src={require("../../assets/images/21.webp")} />
              </div>
            </ReactOwlCarousel>
          </div>
        </div>
      </Container>
      <Container className="section_9">
        <div className="container">
          <div className="row">
            <div className="col text-center">
              <div className="bg-txt">
                <h2 data-aos="fade-up" className="heading_2">
                  Engage the Customers with <br />
                  Powerful Web & Designing
                </h2>
                <a href="#about" className="get_started">
                  Get Started
                </a>
                <a href="#about" className="get_started">
                  Live Chat
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container fluid className="section_10 g-0">
        <div className="container">
          <div className="row">
            <div className="col text-center">
              <h4>Industries we've worked for</h4>
              <h2 data-aos="fade-up" className="heading_2">
                Helping Business in <span>All Domains</span>
              </h2>
            </div>
          </div>
          <div className="row text-center">
            <div className="col-md-3 col-6">
              <img
                className="vector_img"
                src={require("../../assets/images/icon-1.webp")}
              />
              <h3>
                Social <br />
                Networking
              </h3>
            </div>
            <div className="col-md-3 col-6">
              <img
                className="vector_img"
                src={require("../../assets/images/icon-2.webp")}
              />
              <h3>
                Digital <br />
                Marketing
              </h3>
            </div>
            <div className="col-md-3 col-6">
              <img
                className="vector_img"
                src={require("../../assets/images/icon-3.webp")}
              />
              <h3>
                Ecommerce <br />
                Development
              </h3>
            </div>
            <div className="col-md-3 col-6">
              <img
                className="vector_img"
                src={require("../../assets/images/icon-4.webp")}
              />
              <h3>
                Video <br />
                Service
              </h3>
            </div>
          </div>
          <div className="row text-center icon-ctr">
            <div className="col-md-3 col-6">
              <img
                className="vector_img"
                src={require("../../assets/images/icon-5.webp")}
              />
              <h3>
                Banking <br />
                Service
              </h3>
            </div>
            <div className="col-md-3 col-6">
              <img
                className="vector_img"
                src={require("../../assets/images/icon-6.webp")}
              />
              <h3>
                Enterprise <br />
                Service
              </h3>
            </div>
            <div className="col-md-3 col-6">
              <img
                className="vector_img"
                src={require("../../assets/images/icon-7.webp")}
              />
              <h3>
                Education <br />
                Service
              </h3>
            </div>
            <div className="col-md-3 col-6">
              <img
                className="vector_img"
                src={require("../../assets/images/icon-8.webp")}
              />
              <h3>
                Tour & <br />
                Travels
              </h3>
            </div>
          </div>
          <div className="row text-center">
            <div className="col-md-3 col-6">
              <img
                className="vector_img"
                src={require("../../assets/images/icon-9.webp")}
              />
              <h3>
                Health <br />
                Service
              </h3>
            </div>
            <div className="col-md-3 col-6">
              <img
                className="vector_img"
                src={require("../../assets/images/icon-10.webp")}
              />
              <h3>
                Event & <br />
                Ticket
              </h3>
            </div>
            <div className="col-md-3 col-6">
              <img
                className="vector_img"
                src={require("../../assets/images/icon-11.webp")}
              />
              <h3>
                Restaurant <br />
                Service
              </h3>
            </div>
            <div className="col-md-3 col-6">
              <img
                className="vector_img"
                src={require("../../assets/images/icon-12.webp")}
              />
              <h3>
                Business <br />
                Consultant
              </h3>
            </div>
          </div>
        </div>
      </Container>
      <Container className="section_11">
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <div className=" stiky-test">
                <h4>What ur clients say about our services</h4>
                <h2 data-aos="fade-up" className="heading_2">
                  Over <span>1000+</span> Happy Clients <br />
                  and Growing
                </h2>
              </div>
            </div>
            <div className="col-md-5">
              <div className="testimonials">
                <div className="name-rating">
                  <h3>David Enloe</h3>
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
                </div>
                <div className="test-p">
                  <p>
                    Websodesign Web Solution is a one-stop solution for
                    everything an organization requires. Their skilled
                    developers combined quality with timeliness and created an
                    outstanding website for us. Truly amazed with their work.
                  </p>
                </div>
              </div>
              <div className="testimonials">
                <div className="name-rating">
                  <h3>Austin Provencher</h3>
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
                </div>
                <div className="test-p">
                  <p>
                    Websodesign Web Solution is a one-stop solution for
                    everything an organization requires. Their skilled
                    developers combined quality with timeliness and created an
                    outstanding website for us. Truly amazed with their work.
                  </p>
                </div>
              </div>
              <div className="testimonials">
                <div className="name-rating">
                  <h3>Maria Toledo</h3>
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
                </div>
                <div className="test-p">
                  <p>
                    Websodesign Web Solution is a one-stop solution for
                    everything an organization requires. Their skilled
                    developers combined quality with timeliness and created an
                    outstanding website for us. Truly amazed with their work.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Home;
