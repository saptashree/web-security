import React from "react";
import Iframe from "react-iframe";
import { Row, Col, Container } from "reactstrap";
import classes from "./contacts.module.css";
import Footer from "./Footer";
import Formcontact from "./Formcontact";

function Contact() {
  return (
    <div>
      <Iframe
        class="elementor-background-video-embed"
        frameborder="0"
        allowfullscreen="1"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        title="YouTube video player"
        width="100%"
        height="500px"
        src="https://www.youtube.com/embed/__O1eATrXI0?controls=0&amp;rel=0&amp;playsinline=1&amp;enablejsapi=1&amp;autoplay=1&amp;mute=1&amp;loop=1&amp;
        origin=https%3A%2F%2Fwww.technocratssollutions.com&amp;widgetid=1"
        id="widget2"
        data-gtm-yt-inspected-1_25="true"
      ></Iframe>
      <div className={classes.content1}>
        <h1>Contacts</h1>
      </div>
      <Container>
        <Row className={classes.map1}>
          <Col xs="7"></Col>
          <Col xs="5" className={classes.formbackground}>
            <Formcontact />
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default Contact;
