import React from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardImg,
  Container,
  Row,
  Col,
} from "reactstrap";
import classes from "./card1.module.css";

function Card1(props) {
  return (
    <div>
      <Card className={classes.card}>
        <CardBody>
          <Container>
            <Row>
              <Col>
                <CardImg src={props.images}></CardImg>
              </Col>
              <Col>
                <CardTitle style={{color:'#e60000',fontWeight:'17px'}}>{props.title}</CardTitle>

                <CardText style={{fontSize:'12px',color:'black'}}>{props.text}</CardText>
              </Col>
            </Row>
          </Container>
        </CardBody>
      </Card>
    </div>
  );
}

export default Card1;
