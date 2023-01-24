import React from 'react';
import { Col, Container, Row, Button, Image, } from "react-bootstrap";
import { Form, useNavigate } from "react-router-dom";
import "./contact.scss";
import bnr_img from "../../assets/images/contact-img/Phone.webp";
import bnr_img_1 from "../../assets/images/contact-img/email.webp";
import bnr_img_2 from "../../assets/images/contact-img/pin.webp";
// import { send } from "emailjs-com";
// import { useFormik } from "formik";

function Contact() {
    // function Contact() {
        const [toSend, setToSend] = React.useState({});
        const nav = useNavigate();
        // const formik = useFormik({
        //   initialValues: {
        //     email: "",
        //     how_d_you_hear_about_us_: "",
        //   },
        // });
      
        const sendEmail = (e) => {

          e.preventDefault();
        //   send("service_g048fwg", "template_zpu38vg", toSend, "JE-kELQ7Lo4pAD-Kl")
        //     .then((response) => {
        //       console.log("SUCCESS!", response.status, response.text);
        //       setTimeout(() => {
        //         nav("/thankyou");
        //       }, 1000);
        //     })
        //     .catch((err) => {
        //       console.log("FAILED...", err);
        //     });
        // };
    };
  return (
    <>
    <Container className="contact_page cs-1">
        <Row className="cs-1">
            <Col sm={12} lg={6}>
                <div className='bg-image'>
                    <h1>Have Question? Write a Message</h1>
                    <p>We will catch you as early as we receive the message</p>
                    <div className='img-box'>
                        <div className='Image'>
                            <Image src={bnr_img} />
                        </div>
                        <div className='img-content'>
                            <h3>Phone</h3>
                            <span>203-920-4829</span>
                        </div>
                    </div>
                    <div className='img-box'>
                        <div className='Image'>
                            <Image src={bnr_img_1} />
                        </div>
                        <div className='img-content'>
                            <h3>Email</h3>
                            <span>support@websodesign.com</span>
                        </div>
                    </div>
                    <div className='img-box'>
                        <div className='Image'>
                            <Image src={bnr_img_2} />
                        </div>
                        <div className='img-content'>
                            <h3>Address</h3>
                            <span>110 Plaza West, San Jose, CA 95128, USA</span>
                        </div>
                    </div>
                </div>
            </Col>
            <Col sm={12} lg={6}>
                <form className="cform">
                  <Row className="pt-2">
                      <label htmlFor="fname">First Name</label>
                      <input
                        id="fnam"
                        placeholder="Enter Your Last Name"
                        name="fname"
                        type="text"
                        class="hs-input"
                      />
                  </Row>
                  <Row className="pt-2">
                    <label htmlFor="lname">Last Name</label>
                      <input
                        id="lname"
                        placeholder="Enter Your Last Name"
                        name="lname"
                        type="text"
                        class="hs-input"
                      />
                  </Row>
                  <Row className="pt-2">
                  <label htmlFor="email">Email Address</label>
                  <input
                    id="email"
                    placeholder="Enter Your Email"
                    name="email"
                    type="email"
                    class="hs-input"
                  />
                  </Row>
                  <Row className="pt-2">
                  <label htmlFor="how_d_you_hear_about_us_">
                    Message
                  </label>
                  <input
                    id="how_d_you_hear_about_us_-0a38b391-6900-4e1b-9c5d-bb6fcc759859"
                    name="how_d_you_hear_about_us_"
                    placeholder="Enter Your Message"
                    type="text"
                    class="hs-input"
                    inputmode="text"
                  ></input>
                  </Row>
                  <Row className="pt-2">
                  <button className="sub_btn" type="submit">
                    Send
                  </button>
                  </Row>
                </form>
            </Col>
        </Row>
    </Container>
    <Container fluid>
        <Row>
            <Col>
                <div className="map-image">
                    
                </div>
            </Col>
        </Row>
    </Container>
    </>
  )
}

export default Contact