import React from "react";
import Iframe from "react-iframe";
import { Row, Col, Container } from "reactstrap";
import classes from "./fire.module.css";

function Fire() {
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
        <h1>Fire Alaram&Detection Systems</h1>
      </div>
      <div>
        <Container>
          <Row className={classes.fire}>
            <Col>
              <img src="/Images/fire-img.jpg" />
            </Col>
            <Col>
              <p>
                Fire mishaps have always been on a rise, with fire accidents
                being almost correlated to the growth & development in the
                cities. With ever increasing industrial & commercial sectors,
                there are more than 13,000 fire incidents reported every year in
                India. The reason behind this ever increasing mishaps is the
                negligence of a fire alarm & detection system or the
                ineffectiveness of the existing age old systems which have been
                installed in the factories & commercial buildings since their
                inception. To cater to this problem we at Technocrats have
                innovated customer centric solutions which can be easily scaled
                & customised to suit the premises where the system is to be
                installed. With over 3 decades of experience in the field of
                fire alarm & detection systems. Technocrats have always been the
                first choice when it comes to fire alarm system integration.
              </p>
            </Col>
          </Row>
          <Row className={classes.firep}>
            <p>
              In order to effectively protect your employees & your business
              from any unforsaken fire mishap it is of prime importance to
              select the right type of fire alarm & detection system. Every
              business is different & so are the needs & requirements of every
              commercial premises. Hence, we at Technocrats Safety & Security
              Systems have devised the following types of fire alarm detection
              systems:
            </p>
          </Row>
        </Container>
        <Container>
          <Row className={classes.firework}>
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

export default Fire;
