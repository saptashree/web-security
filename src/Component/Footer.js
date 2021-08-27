import React from "react";
import { Row, Col, Container } from "reactstrap";
import classes from "./footer.module.css";

function Footer() {
  return (
    <div>
      <Container>
        <Row>
          <Col className={classes.footer1}>
            <h3>Recent Activities </h3>
            <div className={classes.imagebox}>
              <img src="/Images/footer1.jpg" />
              <Row>
                <Col xs="2">
                  <img
                    src="/Images/logo2.png"
                    style={{ width: "40px", height: "40px" }}
                  />
                </Col>
                <Col xs="10">
                  <h2>Technocrats Safety And Security Systems PVT LTD </h2>
                  <span>1 month 1 week ago</span>
                </Col>
              </Row>
              <p>
                Wondering why you need a CCTV System for your office premises?
                Well, here are three compelling reasons why you should have one!
              </p>
              <br/>
              <p>For more information log on to:</p>
            </div>
          </Col>
          <Col></Col>
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;
