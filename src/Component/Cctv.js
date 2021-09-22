import React from "react";
import Iframe from "react-iframe";
import classes from "./Cctv.module.css";
import { Row, Col, Container } from "reactstrap";

function Cctv() {
  return (
    <div>
      <Iframe
        frameborder="0"
        allowfullscreen="1"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        title="YouTube video player"
        width="100%"
        height="600px"
        left="-84.6px"
        autoPlay="1"
        muted="true"
        src="https://www.youtube.com/embed/3POQlf5uKcA?controls=0&amp;rel=0&amp;playsinline=1&amp;enablejsapi=1&amp;autoplay=1&amp;mute=1&amp;allow='autoplay';loop=1&amp;showinfo=0;allowfullscreen=1;data-gtm-yt-inspected-1_25=true;plyr.io&amp; "
        data-gtm-yt-inspected-1_25="true"
        style={{ width: "100%" }}
      />
      <div className={classes.content1}>
        <h1>CCTV Systems</h1>
        
      </div>
       <div>
      <Container  >
        <Row className={classes.Cctvimg}>
          <Col>
            <img src="/Images/cctvpic1.jpg" />
          </Col>
          <Col>
            <p>
              With globalisation at the peak of its curve, there are several big
              & small businesses growing in India. If we see the statistics
              India ranked 142nd in the year 2014 & in mere 5 years India now
              ranks 63rd in the world bank’s ease of doing business report. But
              this rapid growth has also led to growth in crime rates in the
              cities. This can be a major setback for businesses. Such
              unforsaken circumstances can be easily avoided with the help of an
              active security system which guards the premises 24×7, a security
              systems which cannot be compromised & a security system which
              works flawlessly all round the year; the CCTV Systems.
            </p>
          </Col>
        </Row>
        <Row className={classes.CctvimgPoints}>
          <h3>Our expertise</h3>
          <p>
            With over 3 decades of experience in the field of safety & security
            systems, we at Technocrats have innovated & integrated systems which
            are scalable, highly customisable & yet user friendly. Following are
            the types of CCTV camera systems:
          </p>
        </Row>
        <Row className={classes.Cctvtech}>
          <p>
            <strong>OUR LATEST TECHNOLOGY:</strong>
          </p>
          <ul>
            <li>
              <strong>Effective management of real-time CCTV video:</strong>
              Video analytics allows you to effectively manage multiple CCTV
              cameras within a system. Softwares watch the cameras and notifies
              you when action needs to be taken. This requires fewer security
              personnel to watch more cameras than a standard CCTV system.
            </li>
            <li>
              <strong>
                Intelligent motion detection: Video analytics software is based
                on various algorithms that will analyze the video to determine
                the type of motion. This means your CCTV system will only look
                for the true motion of a person or vehicle.
              </strong>
            </li>
            <li>
              <strong>
                Number plate recognition:Detect automobile license plates that
                can then be integrated in the system for behavior monitoring. It
                also allows cameras within the CCTV system to determine the
                direction the vehicles are heading towards.
              </strong>
            </li>
            <li>
              <strong>
                Object recognition: Within a CCTV system, monitor any and every
                missing or unwanted objects.
              </strong>
            </li>
            <li>
              <strong>
                Auto-tracking motion with PTZ cameras: Combined with
                pan/tilt/zoom (PTZ) cameras within a CCTV system, you can enable
                auto-tracking capabilities or real-time tracking.
              </strong>
            </li>
          </ul>
          <p>
            <strong>THE TECHNOCRATS PROMISE:</strong>
          </p>
          <ul>
            <li>
              <strong>Detailed site survey</strong>
            </li>
            <li>
              <strong>System Design</strong>
            </li>
            <li>
              <strong>Import and Procurement of hardware</strong>
            </li>
            <li>
              <strong>
                Inspection, Pre-commissioning activities and testing
              </strong>
            </li>
            <li>
              <strong>Timely delivery</strong>
            </li>
            <li>
              <strong>Mobilisation of execution teams</strong>
            </li>
            <li>
              <strong>
                Erection, installation, commissioning and integration of systems
              </strong>
            </li>
            <li>
              <strong>Training / documentation and smooth handover</strong>
            </li>
          </ul>
        </Row>
      </Container></div>
      <Container>
        <Row className={classes.Cctvwork}>
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
              Erection, installation, commissioning, and integration of systems
            </li>
            <li>Training/documentation and smooth handover
</li>
          </ul>
        </Row>
      </Container>
    </div>
  );
}

export default Cctv;
