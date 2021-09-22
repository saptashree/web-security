import React from "react";
import Iframe from "react-iframe";
import { Row, Col, Container } from "reactstrap";
import classes from "./access.module.css";

function AccessControl() {
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
        src="https://www.youtube.com/embed/XNCXZYbT8yk?controls=0&amp;rel=0&amp;playsinline=1&amp;enablejsapi=1&amp;autoplay=1&amp;mute=1&amp;allow='autoplay';loop=1&amp;
        origin=https%3A%2F%2Fwww.technocratssollutions.com&amp;widgetid=1"
        id="widget2"
        data-gtm-yt-inspected-1_25="true"
      ></Iframe>
      <div className={classes.content1}>
        <h1>Access Control System </h1>
      </div>
      <div>
        <Container>
          <Row className={classes.access}>
            <Col xs="5">
              <img src="/Images/access1.jpg" />
            </Col>
            <Col xs="7">
              <p>
                Unauthorised intruders can be a threat to any business. They can
                either steal valuable data from the company or at times they can
                even be a threat to the employees. Earlier locking the doors
                within the organisation was the only option but this also
                limited the free movement of the employees within the
                organisation. Understanding this scenario, the access control
                systems were developed. An access control system is a fully
                automated system which not only restricts the entry of
                unauthorised visitors, it also allows the free passage for the
                employees of the organisation all of this without any human
                intervention.
              </p>
            </Col>
          </Row>
          <Row className={classes.accessp}>
            <p>
              Over the past three decades there have been many challenges when
              it comes to the safety & security of commercial as well as
              residential premises. These challenges have in turn helped us to
              keep improving our services to meet the current requirements &
              safety standards. Following are the types of access control
              systems that we integrate:
            </p>
          </Row>
          <Row className={classes.content2}>
            <Col xs="5">
              <img
                src="/Images/access2.jpg"
                style={{ width: "500px", height: "300px" }}
              />
            </Col>
            <Col xs="7">
              <h5>Discretionary Access Control (DAC)</h5>
              <ul>
                <li>
                  The business owner decides whom to grant access in a specific
                  location either physically or digitally
                </li>
                <li>The Access restrictions are comparatively lower</li>
                <li>
                  Ideal for smaller offices where higher level security is not
                  needed
                </li>
                <li>Easy to install compared to other systems</li>
              </ul>
            </Col>
          </Row>
          <Row className={classes.content2}>
            <Col>
              <h5>Mandatory Access Control (MAC)</h5>
              <ul>
                <li>Better control over the level of security</li>
                <li>Higher access restrictions</li>
                <li>
                  Labeling system is used to grant access to the personnals
                </li>
              </ul>
            </Col>
            <Col>
              <img
                src="/Images/access3.jpg"
                style={{ width: "500px", height: "300px" }}
              />
            </Col>
          </Row>
          <Row className={classes.content2}>
            <Col>
              <img
                src="/Images/access4.jpg"
                style={{ width: "500px", height: "300px" }}
              />
            </Col>
            <Col>
              <h5>Role-Based Access Control (RBAC)</h5>
              <ul>
                <li>
                  The business owner decides whom to grant access in a specific
                  location either physically or digitally
                </li>
                <li>The Access restrictions are comparatively lower</li>
                <li>
                  Ideal for smaller offices where higher level security is not
                  needed
                </li>
                <li>Easy to install compared to other systems</li>
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
      <div>
        <Container>
          <Row className={classes.content3}>
            <h3>Our work process</h3>
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

export default AccessControl;
