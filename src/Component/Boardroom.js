import React from "react";
import Iframe from "react-iframe";
import { Row, Col, Container } from "reactstrap";
import classes from "./boardroom.module.css";

function Boardroom() {
  return (
    <div>
      <Iframe
        className={classes.contentIF}
        class="elementor-background-video-embed"
        frameborder="0"
        allowfullscreen="1"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        title="YouTube video player"
        width="1525px"
        height="600px"
        src="https://www.youtube.com/embed/a_hl-cameHk?controls=0&amp;rel=0&amp;playsinline=1&amp;enablejsapi=1&amp;autoplay=1&amp;mute=1&amp;allow='autoplay';loop=1&amp;
            origin=https%3A%2F%2Fwww.technocratssollutions.com&amp;widgetid=1"
        id="widget2"
        data-gtm-yt-inspected-1_25="true"
      ></Iframe>
      <div className={classes.content1}>
        <h1> Boardroom Systems</h1>
      </div>
      <Container className={classes.content2}>
        <Row>
          <Col>
            <img src="/Images/boardroom-1.jpg" />
          </Col>
          <Col>
            <p>
              <strong>Boardroom systems</strong> include Audiovisual solutions
              such as multimedia projectors, screens and audio with audio and
              video conferencing systems integrated with video walls. Boardroom
              products offer every solution, be it related to display, sound or
              multimedia to a business so that it can conduct successful
              meetings in their boardrooms.
            </p>
          </Col>
        </Row>
        <Row className={classes.content3}>
          <h4>OUR LATEST TECHNOLOGY:</h4>
          <ul>
            <li>
              <strong>Cloud collaboration:</strong>The ability to perform
              digital and physical conferencing together saves time and
              repetition of ideas. Collaborate with people who <br/>aren’t in the
              boardroom through cloud supported boardroom solution products.
            </li>
            <li>
              <strong>Streamlined document integration:</strong> When
              productivity tools such as mail, calendars, documents etc. are
              integrated with inventive audio visual <br/>presentation tools,
              participants come out of the office with a sense of purpose and
              direction.
            </li>
            <li>
              <strong>Tailored solutions:</strong>Solutions are provided by
              analysing and reviewing your boardroom to let you get the best out
              of your investment.
            </li>
            <li>
              <strong>Wireless technology:</strong>All the products are as
              wireless as possible, infused with the latest software, so that
              you don’t have to concern yourself with wires.
            </li>
          </ul>
        </Row>
        <Row className={classes.content4}>
          <h4><strong>THE TECHNOCRATS PROMISE:</strong></h4>
          <ul>
            <li><strong>Superior quality products</strong></li>
            <li>
            <strong>Planning and assisting in the installation of boardroom equipment</strong>
            </li>
            <li><strong>User friendly boardroom environment</strong></li>
            <li><strong>Infrastructure friendly products’ installation</strong></li>
            <li><strong>System maintenance services</strong></li>
          </ul>
        </Row>
      </Container>
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

export default Boardroom;
