import React from "react";
import { Container, Row, Col } from "reactstrap";
import classes from "./about.module.css";
import Card1 from "./Card1";
import Card2 from "./Card2";

function AboutHome() {
  return (
    <div>
      <Container>
        <div className={classes.about1}>
          <Row>
            <Col className={classes.about2}>
              <h2>About Technocrats</h2>
              <p>
                The year 1986 marked the beginning of an era which would
                revolutionise the terms ‘Safety & Security.’ At times when a
                majority of businesses relied on age old security practices, we
                decided to take a contemporary approach by marching into the
                unchartered territories of high end security systems. Over the
                past three decades we have not only modernised the safety &
                security systems for several PSU’s & corporate entities but at
                the same time we have also introduced them to countless
                technological advancements which were still not available in
                India. Thus, earning the title as well as several industry
                recognitions and awards for one of the best security systems
                providers in India.
              </p>
              <button>Know More</button>
            </Col>

            <Col className="about3">
              <img
                src="./Images/about-pic1.jpg"
                style={{ width: "500px", height: "400px" }}
              />
            </Col>
          </Row>
        </div>
      </Container>
      <Container>
        <div><Row style={{textAlign:'center'}}>
          <h2>Our Services</h2>
          <p>
            Secure your workplace with one of the best security system
            integrators in India
          </p></Row>
          <Row>
            <Col>
              <Card1
                className="card"
                images="./Images/card-pic1.jpg"
                title="C4i Systems"
                text="Equip your workplace with one of the finest C4i systems; a military grade all-round safety, security & alarming systems equipped with Artificial intelligence. "
              />
            </Col>
            <Col>
              <Card1
                className="card"
                images="./Images/card-pic2.jpg"
                title="CCTV Systems"
                text="Monitor every activity in your workplace at the ease of your smartphone with our state of the art CCTV Solutions"
              />
            </Col>
            <Col>
              <Card1
                className="card"
                images="./Images/card-pic3.jpg"
                title="Fire Alarm & Smoke Detection System"
                text="Safeguard your workplace from mishaps caused by fire. Switch to one of the finest fire & gas detection systems available in India"
              />
            </Col>
          </Row>
        </div>
      </Container>
      <Container>
        <div>
          <Row>
            <Col>
              <Card2
                className="card"
                images="./Images/card-pic4.jpg"
                title="Building Management System"
                text="Step into the new era with our Intelligent Building management system. A complete security & surveillance systems for your corporate as well as residential premises."
              />
            </Col>
            <Col>
              <Card2
                className="card"
                images="./Images/card-pic5.jpg"
                title="Boardroom Systems"
                text="Equip your boardroom with some of the latest audio & video devices with our tailor made boardroom solutions specifically designed as per your requirements."
              />
            </Col>
            <Col>
              <Card2
                className="card"
                images="./Images/card-pic6.jpg"
                title="Access Control System"
                text="Safeguard your workplace from mishaps caused by fire. Switch to one of the finest fire & gas detection systems available in India"
              />
            </Col>
            <Col>
              <Card2
                className="card"
                images="./Images/card-pic7.jpg"
                title="Public Address System"
                text="Be it reaching out to the masses or communicating a message to your employees, do it with ease with our top notch broadcasting & public awareness systems."
              />
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}

export default AboutHome;
