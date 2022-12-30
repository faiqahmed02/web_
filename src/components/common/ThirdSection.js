import React from "react";
import { Col, Container, Row, Image } from "react-bootstrap";
import "./thirdsection.scss";

function ThirdSection() {
  return (
    <Container fluid className="g-0 third_section_container">
      {/* <Row> */}
      <Container>
        <Row>
          <Col>
            <h3>We are an award winning global studio</h3>
            <p>
              working with clients from all over the world and building
              successful brands with empathy and creativity with our
              comprehensive range of services
            </p>
          </Col>
        </Row>
        <Row>
          <h4>
            <strong>Served</strong>
          </h4>
        </Row>
      </Container>
      {/* </Row> */}
      <Row className="third_section_row p-0 m-0">
        <Col sm={12} lg={3} className="third_section_col">
          <div className="third_section_inner_div">
            <div>
              <h4>
                7<br />
                <span>Years</span>
              </h4>
            </div>
            <div>
              <h4>
                16
                <br />
                <span>Industries</span>
              </h4>
            </div>
            <div>
              <h4>
                14
                <br />
                <span>Countries</span>
              </h4>
            </div>
            <div>
              <h4>
                7<br />
                <span>Years</span>
              </h4>
            </div>
            <div>
              <h4>
                7<br />
                <span>Years</span>
              </h4>
            </div>
            <div>
              <h4>
                7<br />
                <span>Years</span>
              </h4>
            </div>
          </div>
        </Col>
        <Col className="third_section_col second_col">
          <Row>
            <Col sm={12} lg={6}>
              <div className="right_col">
                <Image
                  width={"20%"}
                  src={require("../../assets/images/Services/Logo/logo-1.webp")}
                />
                <h4>2D animated logo</h4>
                <p>
                  Custom 2D logos are renowned for their contemporary, timeless,
                  and uncomplicated design. They frequently elevate brands to
                  new heights. Want to describe your marketing campaign? To
                  effectively convey your message, you can contact us to produce
                  animations.
                </p>
              </div>
            </Col>
            <Col sm={12} lg={6}>
              <div className="right_col">
                <Image
                  width={"20%"}
                  src={require("../../assets/images/Services/Logo/logo-2.webp")}
                />
                <h4>3D animated logo</h4>
                <p>
                  Get logo branding, 3D animation logos may make your logo more
                  eye-catching, and imaginative and can mesmerize your target
                  audience, and pique their interest in your services and
                  products. Your logo opens up countless opportunities for
                  producing one-of-a-kind.
                </p>
              </div>
            </Col>
            <Col sm={12} lg={6}>
              <div className="right_col">
                <Image
                  width={"20%"}
                  src={require("../../assets/images/Services/Logo/logo-3.webp")}
                />
                <h4>Iconic Logo Design</h4>
                <p>
                  When creating an iconic logo, we keep in mind the qualities
                  that are necessary to make it special. According to our
                  experts in iconic logo design. An iconic logo is
                  straightforward but distinctive, Because of this, even after
                  only one encounters them, they are unforgettable.
                </p>
              </div>
            </Col>
            <Col sm={12} lg={6}>
              <div className="right_col">
                <Image
                  width={"20%"}
                  src={require("../../assets/images/Services/Logo/logo-4.webp")}
                />
                <h4>Illustrative Logo Design</h4>
                <p>
                  Our main objective is to offer the best illustrative logo
                  design. Though each of our projects has a particular goal,
                  they always have the desire to influence people and create a
                  standout design. Our designers guarantees to attract a large
                  audience to your business.
                </p>
              </div>
            </Col>
            <Col sm={12} lg={6}>
              <div className="right_col">
                <Image
                  width={"20%"}
                  src={require("../../assets/images/Services/Logo/logo-5.webp")}
                />
                <h4>Symbolic Logo Design</h4>
                <p>
                  A good symbolic logo design and branding agency will take the
                  time to get to know your business, understand your goals, and
                  help you create a symbolic logo design that represents who you
                  are as a company or brand.
                </p>
              </div>
            </Col>
            <Col sm={12} lg={6}>
              <div className="right_col">
                <Image
                  width={"20%"}
                  src={require("../../assets/images/Services/Logo/logo-6.webp")}
                />
                <h4>Typographic Logo Design</h4>
                <p>
                  Create an infinite number of typography logo designs and pick
                  the ideal brand for your new company. We are here to assist
                  you in launching your company with a gorgeous new typographic
                  logo design and a cost-free domain name!
                </p>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default ThirdSection;
