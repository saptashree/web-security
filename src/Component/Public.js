import React from "react";
import Iframe from "react-iframe";
import { Row, Col, Container } from "reactstrap";
import classes from "./public.module.css";
function Public() {
  return (
    <div>
      <Iframe
        frameborder="0"
        allowfullscreen="1"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        title="YouTube video player"
        width="1525px"
        height="600px"
        src="https://www.youtube.com/embed/Q8kgEJnKDHw?controls=0&amp;rel=0&amp;playsinline=1&amp;enablejsapi=1&amp;autoplay=1&amp;mute=1&amp;allow='autoplay';loop=1&amp;origin=https%3A%2F%2Fwww.technocratssollutions.com&amp;widgetid=1"
        id="widget2"
        data-gtm-yt-inspected-1_25="true"
      ></Iframe>
      <div className={classes.content1}>
        <h1>Public Address Systems</h1>
      </div>

      <div>
        <Container>
          <Row className={classes.public}>
            <Col>
              <img src="/Images/publicimg.jpg" />
            </Col>
            <Col>
              <p>
                High end public address systems have become a must now-a-days
                especially when it comes to dealing with challenges related to
                the safety & security of the people working in the organisation.
                In such cases, the quality & effectiveness of the systems can
                never be compromised, because a failure in conveying the message
                can lead to fatalities. Understanding this situation we at
                Technocrats have teamed up with some of the best public
                awareness system manufacturers & created some systems which can
                be easily customised as per the clients requirements.{" "}
              </p>
            </Col>
          </Row>
          <Row className={classes.publicp}> 
            <p>
              Over the past 3 decades Technocrats have integrated systems and
              components for major transportation terminals, houses of worship,
              public buildings, office buildings, schools and shopping malls in
              major cities of India. Following are the Public Addressing systems
              that we master at:
            </p>
          </Row>
        </Container>
        <Container>
          <Row className={classes.publicwork}>
            <h3>Our Work Process</h3>
            <ul>
              <li>A detailed site survey is done by a team of engineers</li>
              <li>System Design is created & presented </li>
              <li>
                Import and Procurement of hardware is done as per the client’s
                specification
              </li>
              <li>Inspection, Pre-commissioning activities, and testing</li>
              <li>On-time delivery of your Services</li>
              <li>Mobilization of execution teams</li>
              <li>
                Erection, installation, commissioning, and integration of
                systems
              </li>
              <li>Training/documentation and smooth handover</li>
            </ul>
          </Row>
          <div className={classes.but}>
               <Container>
                   <Row>
               <Col>
              <button>Contact Us</button> </Col></Row>
               </Container>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Public;
