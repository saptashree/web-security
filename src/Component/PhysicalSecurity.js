import React from "react";
import Iframe from "react-iframe";
import { Row, Col, Container } from "reactstrap";
import classes from "./physicalsecurity.module.css";

function PhysicalSecurity() {
  return (
    <div>
      <Iframe
        class="elementor-background-video-embed"
        frameborder="0"
        allowfullscreen="1"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        title="YouTube video player"
        width="100%"
        height="600px"
        src="https://www.youtube.com/embed/Zmkyd2c0S8Q?controls=0&amp;rel=0&amp;playsinline=1&amp;enablejsapi=1&amp;autoplay=1&amp;mute=1&amp;allow='autoplay';loop=1&amp;
        origin=https%3A%2F%2Fwww.technocratssollutions.com&amp;widgetid=1"
        id="widget2"
        data-gtm-yt-inspected-1_25="true"
      ></Iframe>
      <div className={classes.content1}>
        <h1>Physical Security System</h1>
      </div>
      <div className={classes.physical1}>
        <Container>
          <Row>
            <img
              src="/Images/physical2.jpg"
              style={{
                height: "300px",
                width: "500px",
                borderStyle: "solid",
                borderWidth: "8px 8px 8px 8px",
                display: "block",
                margin: "auto",
                marginTop: "20px",
              }}
            />
          </Row>
          <Row className={classes.content2}>
            <p>
              Physical security products protects and manages business resources
              in the form of technical, administrative and physical controls. A
              business is secured through access control systems, facility
              designs, CCTV surveillance systems etc. Every business, big or
              small should have a sound physical security system to safeguard
              itself and the employees against potential technical or physical
              threats.
            </p>
          </Row>
          <Row className={classes.content3}>
            <h4>OUR LATEST TECHNOLOGY:</h4>
            <ul>
              <li>
                <strong>Flap Barrier:</strong>Manage crowds and ensure security
                at areas with high pedestrian flow. Our Flap barrier solutions
                are designed to secure and control access <br/>by letting only one
                person through at a time.
              </li>
              <li>
                <strong>Machine and deep learning:</strong>Inventine physical
                security products infused with machine and deep learning
                technologies to deploy smart video analytics <br/>tools.
              </li>
              <li>
                <strong>Smart customised technology:</strong>Sustainability and
                efficiency through advanced smart technological products
                developed by industry experts, providing <br/>you with quality
                physical security products.
              </li>
              <li>
                <strong>Cloud-computing:</strong>Physical security products
                capable of processing data collected by CCTV cameras or access
                control device, allowing you to review and <br/>control human actions
                and potential business threats.
              </li>
            </ul>
          </Row>
          <Row className={classes.content4}>
            <h4>THE TECHNOCRATS PROMISE:</h4>
            <ul>
              <li>
                <strong>Comprehensive survey of the infrastructure</strong>
              </li>
              <li>
                <strong>Personalised physical security solutions</strong>
              </li>
              <li>
                <strong>Products of superior quality</strong>
              </li>
              <li>
                <strong>Uncompromised Aesthetics</strong>
              </li>
              <li>
                <strong>Maintenance services</strong>
              </li>
            </ul>
          </Row>
        </Container>
      </div>
      <div className={classes.but}>
        <Container>
          <Row>
            <Col>
              <button>Contact Us</button>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default PhysicalSecurity;
