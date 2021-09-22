import React from "react";
import Particle from "./Particle";
import { Row, Col, Container } from "reactstrap";

import classes from "./particle2.module.css";

function Particle2() {
  return (
    <div className={classes.top}>
      <Particle />
      <Container className={classes.home2}>
        <h2>Why Technocrats?</h2>
        <p>
          We believe that system integration is only complete with flawless
          customer service
        </p>
        <Row>
          <Col>
            <img src="/Images/logored1.png" />
            <h4>Custom-Made Systems</h4>
            <p>
              Be it a residential, commercial or a manufacturing unit we offer
              precise customized plans which suited as per your needs.
            </p>
          </Col>
          <Col>
            <img src="/Images/logored2.png" />
            <h4>Tech Experts</h4>

            <p>
              Being well versed in the domain of safety & security systems,
              Technocrats has always valued technological advancement so that
              only the best services are offer to our clients.
            </p>
          </Col>
          <Col>
            <img src="/Images/logored3.png" />
            <h2>Domain Knowledge</h2>
            <p>
              With more than 2 decades of experience to back us up, we at
              technocrats have some of the highly skilled & experienced
              engineers to solve even the most complex problems with ease
            </p>
          </Col>
          <Col>
            <img src="/Images/logored4.png" />
            <h2>Simplified Process</h2>
            <p>
              We believe in a clean & contemporary approach towards system
              integration. Hence we have managed to have a much simplified
              process which is easy to install yet secured enough from intruders
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <img src="/Images/logored5.png" />
            <h2>100% Efficiency</h2>
            <p>
              System efficiency is what defines our services from the
              competition. Be it the products we recommend or the services we
              render, delivering the best at all times is what we believe in.
            </p>
          </Col>
          <Col>
            <img src="/Images/logored6.png" />
            <h2>Customer Satisfaction</h2>
            <p>
              From PSU’s to corporate entities, Technocrats have always been the
              obvious choice. Thus winning several awards & recognitions over
              the past 3 decades
            </p>
          </Col>
          <Col>
            <img src="/Images/logored7.png" />
            <h2>Experienced Professionals</h2>
            <p>
              Skills perfected over years of experience, this is what we bank on
              when it come to our on-site engineers as well as our project
              managers. Thus ensuring flawless project execution & on time
              project completion.
            </p>
          </Col>
          <Col>
            <img src="/Images/logored8.png" />
            <h2>24x7 Customer Support</h2>
            <p>
              Just being available till the project is running is not enough
              when it comes to safety & security systems. Hence we ensure that
              we are connected to our patrons 24×7
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Particle2;
