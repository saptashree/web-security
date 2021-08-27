import React from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import classes from "./formcontrol.module.css";

function Formcontact() {
  return (
    <div>
      <Form>
        <FormGroup>
          <p>
            <Label for="exampleEmail">Your Name</Label>

            <Input type="name" name="name" id="exampleName" />
          </p>
        </FormGroup>

        <FormGroup>
          <p>
            <Label for="exampleEmail">Email</Label>
            <Input type="email" name="email" id="exampleEmail" />
          </p>{" "}
        </FormGroup>
        <FormGroup>
          <p>
            <Label for="examplePassword">Password</Label>
            <Input type="password" name="password" id="examplePassword" />
          </p>
        </FormGroup>
        <FormGroup>
          <p>
            <Label for="exampleSelect">Select Your Services</Label>
            <Input type="select" name="select" id="exampleSelect">
              <option>CCTV Systems</option>
              <option>Fire Alaram Systems</option>
              <option>Public Address Systems</option>
              <option>Building Management Systems</option>
              <option>Access Control Systems</option>
              <option>Physical Security Systems</option>
              <option>IT & Networking Systems</option>
            </Input>
          </p>
        </FormGroup>
        <FormGroup>
          <p>
            {" "}
            <Label for="examplePassword">Subject</Label>
            <Input type="subject" name="subject" id="examplesubject" />
          </p>{" "}
        </FormGroup>
        <FormGroup>
          <p>
            {" "}
            <Label for="exampleText">Text Area</Label>
            <Input
              rows={8}
              col={5}
              type="textarea"
              name="text"
              id="exampleText"
            />
          </p>
        </FormGroup>
        <p>
          {" "}
          <Button className={classes.sub1}>Submit</Button>
        </p>
      </Form>
    </div>
  );
}

export default Formcontact;
