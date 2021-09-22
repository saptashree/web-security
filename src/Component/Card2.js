import React from "react";
import { Card, CardBody, CardTitle, CardText, CardImg } from "reactstrap";
import classes from "./card2.module.css";

function Card2(props) {
  return (
    <div>
      <Card className={classes.card}>
        <CardBody>
          <CardImg src={props.images}></CardImg>

          <CardTitle style={{color:'#e60000',fontWeight:'17px'}}>{props.title}</CardTitle>

          <CardText style={{ fontSize: "10px",color:'black' }}>{props.text}</CardText>
        </CardBody>
      </Card>
    </div>
  );
}

export default Card2;
