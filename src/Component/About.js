import React from "react";
import classes from "./about.module.css";
import { Row, Col, Container } from "reactstrap";
import Owlabout from "./Owlabout";

function About() {
  return (
    <div className={classes.container}>
      <img src="Images/aboutpic-1.jpg" style={{ width: "100%" }} />
      <div className={classes.content1}>
        <h1>About Technocrats</h1>
        <p>One of the best Security System providers in India</p>
      </div>
      <div>
        <Container className={classes.content2}>
          <Row>
            <Col>
              <p>
                1986, the year when the foundation of one of the best security
                systems integrators was laid in India. Ever since then
                Technocrats Safety & Security systems have soared up to new
                heights both in technological advancements as well as in
                customer satisfaction. Thus working for several PSU’s as well as
                corporate entities like Reserve Bank of India, CBI, ISRO, Indian
                Railways, BARC, BPCL, ONGC offshore platforms, airports,
                financial institutions as well as educational institutes.
              </p>
              <p>
                Technocrats Safety & Security Systems have always focussed on
                delivering the best of services to its patrons. This lead to
                many technological advancements which were much needed in the
                modern times.
              </p>
              <p>
                Thus developing safety & security systems which had a broader
                scope; systems which were not only better at surveillance but
                were simultaneously good at adverting diversities & most
                importantly, systems which could deal with even the current
                pandemic situation without any human interventions.
              </p>
              <p>
                With this progressive zest we decided to further optimise the
                domain of safety & security systems. Hence, developing solutions
                which were not only unique but also met the needs of the new
                normal such as:
              </p>
              <p>
                1. AI integrated CCTV Systems with body temperature detection &
                facial recognition <br />
                2. The Fully autonomous C4i Systems for total protection &
                surveillance capabilities <br />
                3. Intelligent Building Management Systems with visitor
                management database <br />
                4. Optimised fire alarm & gas detection system with visual and
                audio signalization <br />
                5. Access control systems developed with AI & body temperature
                scanning <br />
                6. Door interlocking systems with minimum entrance limitation &
                many more
              </p>
            </Col>
            <Col>
              <img
                src="/Images/aboutpic-2.jpg"
                style={{ width: "100%", height: "513px" }}
              />
            </Col>
          </Row>
        </Container>
      </div>
      <div style={{ backgroundColor: "#e6e6e6" }}>
        <Container>
          <Row className={classes.content3}>
            <Col>
              <img src="/Images/aboutlogo-1.png" />
              <h3>OUR MISSION</h3>
              <p>
                30+ years down the line we at Technocrats have lived upto the
                reputation of one of the best security & safety system
                integrators in India. All of this could only be possible due to
                our core aim of delivering the best security solutions to our
                patrons.
              </p>
            </Col>
            <Col>
              <img src="/Images/aboutlogo-2.png" />
              <h3>OUR VISSION</h3>
              <p>
                Technocrats have always believed in Innovating solutions that
                cater to the modern day problems. Solutions that not only
                satisfied our customers but derived results beyond their
                expectations. All of this could only be possible due to one
                unwavering vision of modernizing the security solutions so that
                every organization reaps the benefit of world class security
                systems in India.
              </p>
            </Col>
            <Col>
              <img src="/Images/aboutlogo-3.png" />
              <h3>OUR VALUES</h3>
              <p>
                Commitment, Quality & integrity are the core foundational values
                on which Technocrats Safety & Security systems stands firmly
                from the past 3 decades. It is these values which have enabled
                us to soar to new horizons & explore the unchartered
                territories.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      <div className={classes.slideimg}>
        <img src="Images/aboutfixed-img.jpg" style={{ width: "100%",height:'500px' }} />
        <Container className={classes.sliding}>
          <Row>
            <Owlabout />{" "}
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default About;
