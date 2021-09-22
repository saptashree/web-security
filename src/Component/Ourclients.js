import React from "react";
import classes from "./clients.module.css";
import { Row, Col, Container } from "reactstrap";
import Owlclients from "./Owlclients";

function Ourclients() {
  return (
    <div>
      <img src="/Images/clientcover.jpg" style={{ width: "100%" }} />
      <div className={classes.content1}>
        <h1>Our Clients</h1>
      </div>
      <div>
        <Container>
          <Row className={classes.content2}>
            <p>
              Before Technocrats, not many were aware of the way technology
              could be used in innovative ways. We were <br/>happy to bring it to
              India, especially our clients, and they were more than pleased
              with the services that we<br/> provided to them. The client list speaks
              for itself. From the beginning, we’ve had clients both individual
              and <br/>large organisations with the same partnership and dedication
              at the core of everything that we do. Every day,<br/> since our
              inception, we’ve put our heart and soul into helping people solve
              their problems using technology in <br/>the form of security and
              automation solutions.
            </p>
          </Row>
        </Container>
      </div>
      <div className={classes.content3}>
          
      <Owlclients/>
      </div>
    </div>
  );
}

export default Ourclients;
