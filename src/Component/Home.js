import React from "react";
import Particle from "./Particle";
import Particle2 from "./Particle2";
import Owlslide from "./Owlslide";

import classes from "./home.module.css";
import { Row, Col, Container } from "reactstrap";
import AboutHome from "./AboutHome";
import CountUp from "react-countup";

const style1 = { color: "white", fontSize: "69px" };

function Home() {
  return (
    <div>
      <Particle />
      <div className={classes.home2}>
        <Container>
          <h1 style={{ fontSize: "32px", marginTop: "50px" }}>Welcome To</h1>
          <img
            src="/Images/logo2.png"
            style={{ width: "300px", height: "300px" }}
          />
          <h1>Technocrats Safety & Security Systems Pvt Ltd</h1>
        </Container>
        <Container>
          <Row>
            <Col>
              <img src="/Images/logo3.png" />
              <h3>Project Planning</h3>
            </Col>
            <Col>
              <img src="/Images/logo4.png" />
              <h3>Project Planning</h3>
            </Col>
            <Col>
              <img src="/Images/logo5.png" />
              <h3>System Integration</h3>
            </Col>
          </Row>
        </Container>
      </div>
      <AboutHome />

      <Particle2 />
      <div className={classes.fixedimage}
          >
            <img src='/Images/fixedhome-pic.jpg' style={{ width:'100%',backgroundRepeat:'no-repeat',backgroundAttachment:'fixed'}}/>

        <Container className={classes.home2}>
          
          <Row style={{ alignment: "center" }}>
            <Col>
              <CountUp
                start={0}
                end={400}
                duration={3}
                suffix={"+"}
                style={style1}
              />
              <h2>Satisfied Customers</h2>
            </Col>
            <Col>
              <CountUp
                start={0}
                end={150}
                duration={3}
                suffix={"+"}
                style={style1}
              />
              <h2>Qualified Employees</h2>
            </Col>
            <Col>
              <CountUp
                start={0}
                end={540}
                duration={3}
                suffix={"Cr"}
                style={style1}
              />
              <h2>Value Delivered</h2>
            </Col>
            <Col>
              <CountUp
                start={0}
                end={33}
                duration={3}
                suffix={"+"}
                style={style1}
              />
              <h2>Years Of Experience</h2>
            </Col>
          </Row>
        </Container>
      </div>
      <div>
        <Container className={classes.slide}>
          <Row style={{ textAlign: "center" }}>
            <h3>Empowering those who enrich our nation</h3>
            <h2>Our Esteemed Clients</h2>
            <p>
              Here are some of the prominent PSU’s & corporate entities to whom
              we have rendered our services
            </p>
          </Row>
        </Container>
      </div>
      <Owlslide />
    </div>
  );
}

export default Home;
