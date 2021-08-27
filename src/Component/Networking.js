import React from "react";
import Iframe from "react-iframe";
import { Row, Col, Container } from "reactstrap";
import classes from "./networking.module.css";

function Networking() {
  return (
    <div>
      <Iframe
        class="elementor-background-video-embed"
        frameborder="0"
        allowfullscreen="1"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        title="YouTube video player"
        width="1525px"
        height="600px"
        src="https://www.youtube.com/embed/SI1nROjsCWU?controls=0&amp;rel=0&amp;playsinline=1&amp;enablejsapi=1&amp;autoplay=1&amp;mute=1&amp;allow='autoplay';loop=1&amp;
        origin=https%3A%2F%2Fwww.technocratssollutions.com&amp;widgetid=1"
        id="widget2"
        data-gtm-yt-inspected-1_25="true"
      ></Iframe>
      <div className={classes.content1}>
        <h1> Building Management Systems</h1>
      </div>
      <Container>
        <Row className={classes.content2}>
          <img src="Images/it-1.png" />
        </Row>
        <Row className={classes.content3}>
          <p>
            Every business has a large number of computers and communication
            tools (telephones, printers, access control <br/> system). However, these
            components cannot work without a computer (Servers, Storage,
            Workstations) or data<br/> network (Active-Passive networking, Network
            Switches, Routers, FOTS).
           <br/><br/>
            While these components help in facilitating the daily workflows of a
            business, it means nothing without network <br/>security. Legacy
            networks, monolithic, and completely outdated technology results in
            data loss and network <br/> vulnerabilities. Irrespective of the size of
            your organization, security should be a top priority.
          </p>
        </Row>
        <Row className={classes.content4}>
          <h4>THE TECHNOCRATS PROMISE:</h4>
          <ul>
            <li>
              <strong>
                Suggest the latest, feature-rich and secure components
              </strong>
            </li>
            <li>
              <strong>
                Assist with the Design & Estimation of your Servers and
                Networking devices
              </strong>
            </li>
            <li>
              <strong>Deploy a complete integrated network system</strong>
            </li>
            <li>
              <strong>And finally, maintain the system for the lifetime</strong>
            </li>
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

export default Networking;
