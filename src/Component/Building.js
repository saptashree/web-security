import React from "react";
import Iframe from "react-iframe";
import { Row, Col, Container } from "reactstrap";
import classes from "./building.module.css";

function Building() {
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
        src="https://www.youtube.com/embed/yaSLfNIzEXk?controls=0&amp;rel=0&amp;playsinline=1&amp;enablejsapi=1&amp;autoplay=1&amp;mute=1&amp;allow='autoplay';loop=1&amp;
            origin=https%3A%2F%2Fwww.technocratssollutions.com&amp;widgetid=1"
        id="widget2"
        data-gtm-yt-inspected-1_25="true"
      ></Iframe>
      <div className={classes.content1}>
        <h1> Building Management Systems</h1>
      </div>
      <div>
        <Container>
          <Row className={classes.building}>
            <Col>
              <img src="/Images/card-pic4.jpg" />
            </Col>
            <Col>
              <p>
                Be it a commercial or a residential premises, managing the
                security of the premises is always a tedious task. Secondly,
                without proper integration of security systems, having multiple
                security options will only create chaos. Understanding this
                scenario we at Technocrats have developed some of the finest
                Integrated Building management Systems. Systems which can easily
                be customised as per the premises & the clients needs, Systems
                which can be scaled as per the dynamic scenarios in the
                surroundings & Systems which can flawlessly perform around the
                year
              </p>
            </Col>
            <Row className={classes.buildingp}>
              <p>
                The Technocrats Integrated Building Management Systems is a
                systematically architectured BMS for the integration of HVAC,
                CCTV systems, Public addressing systems, Fire alarm systems,
                Access Control systems, & Security management systems. Following
                are the logical layers of the system architecture:
              </p>
            </Row>
          </Row>
          <Row className={classes.logos}>
            <Col>
              <img src="./Images/building-logo1.png" />
              <p>
                <b>Management Layer</b>
              </p>
              <p>
                <b>
                  Manages the system monitoring, <br />
                  controlling, data storage & reporting
                </b>
              </p>
            </Col>
            <Col>
              <img src="./Images/building-logo2.png" />
              <p>
                <b>Control Layer</b>
              </p>
              <p>
                <b>
                  This is where all the decisions are made <br /> when is comes
                  to addressing a scenario
                </b>
              </p>
            </Col>
            <Col>
              <img src="./Images/building-logo3.png" />
              <p>
                <b>Field Layer</b>
              </p>
              <p>
                <b>
                  Manages the sensing, controlling <br /> and security function
                  of the system
                </b>
              </p>
            </Col>
          </Row>

          <Row className={classes.content2}>
            <p>
              <b>
                Following are the systems which will be integrated in the
                Technocrats Integrated Building management system:
              </b>
            </p>
            <ul>
              <li>
                <b>Fire Alarm & Detection System</b>
              </li>
              <li>
                <b>Surveillance System</b>
              </li>
              <li>
                <b>Access Control System</b>
              </li>
              <li>
                <b>Public Address System</b>
              </li>
              <li>
                <b>Perimeter intrusion System</b>
              </li>
            </ul>
          </Row>

          <Row className={classes.content3}>
            <p>
              <b>
                Following are the systems which will be integrated in the
                Technocrats Integrated Building management system:
              </b>
            </p>
          </Row>
          <Row className={classes.content4}>
            <Col xs='4'>
              <img
                src="Images/manage-fire.jpg"
                style={{ width: "350px", height: "250px" }}
              />
            </Col>
            <Col xs='8'>
              <h5>Fire alarm & detection System</h5>
              <p>
                Integrated fire alarm & detection system plays a key role when
                it comes to safeguarding employees from mishaps caused by
                accidental fire. It not only detects the source of fire but they
                are also capable of taking preventive measures to extinguish the
                fire. Hence, incase of a fire the occupants can be easily
                evacuated from the premises & in such case using a gas
                suppression system integrated with the (FAS) can also be helpful
                to suppress the fire & also protect equipment which can be
                easily damaged by water.
              </p>
            </Col>
          </Row>
          <Row className={classes.content4}>
            <Col xs='8'>
              <h5>Surveillance System</h5>
              <p>
                Surveillance systems or CCTV systems integration is essential in
                every residential as well as commercial premises. These systems
                can be easily integrated with the existing security systems like
                fire alarm systems, or access control systems.With the latest
                development in AI (Artificial Intelligence) there are even
                systems which are capable of taking preventive measures as and
                when a problem is detected in the premises. Similarly, CCTV
                cameras with IP are also capable of live streaming the
                activities happening in the surrounding so that the security
                managers can easily live track the premises at any given time.
              </p>
            </Col>
            <Col xs='4'>
              <img
                src="/Images/camara-manage.jpg"
                style={{ width: "350px", height: "250px" }}
              />
            </Col>
          </Row>
          <Row className={classes.content4}>
            <Col xs='4'>
              <img
                src="/Images/card-image.jpg"
                style={{ width: "350px", height: "250px" }}
              />
            </Col>
            <Col xs='8'>
              <h5>Access Control System</h5>
              <p>
                Earlier commercial & residential premises solely depended on the
                security personnel for restricting the entry of unwanted
                visitors. This problem is now solved with the aid of an access
                control system. Integrated along with a CCTV camera, every
                movement of the visitor can be monitored as he/she arrives at
                the premises. Only after approval from the concerned authority,
                access is granted to the visitor. Similarly, The data of the
                visitors is also saved in the system for further reference. All
                of this can be carried out with little to no human intervention.
              </p>
            </Col>
          </Row>
          <Row className={classes.content4}>
            <Col xs='8'>
              <h5>Public Address System</h5>
              <p>
                A public address system comes really handy when it comes to
                managing the crowd in commercial or residential premises. This
                is specially used during a mishap or an unforsaken circumstance
                where a large crowd is to be directed out of the premises to
                avoid any casualties. An IP based PA system is widely used
                now-a-days so that specific messages are sent to specific
                departments in the premises.
              </p>
            </Col>
            <Col xs='4'>
              <img
                src="/Images/mic-manage.jpg"
                style={{ width: "350px", height: "250px" }}
              />
            </Col>
          </Row>
          <Row className={classes.content4}>
            <Col xs='4'>
              <img
                src="/Images/cctv-manage.jpg"
                style={{ width: "350px", height: "250px" }}
              />
            </Col>
            <Col xs='8'>
              <h5>Perimeter intrusion System</h5>
              <p>
                When it comes to commercial premises like warehouses or
                factories, keeping track on every movement in the premises is of
                key importance. Since the premises are big enough to keep track
                of the activities, there can also be a fair chance of pilfering
                by unethically entering the premises. In such cases, a PIS
                (Perimeter Intrusion System) is highly recommended. These
                systems are developed especially to not only keep a track on all
                the activities in the organisation but they are also capable to
                take preventive measures to avoid any losses due to human
                interventions.
              </p>
            </Col>
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

export default Building;
