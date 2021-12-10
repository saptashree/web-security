import React, { useState } from "react";
import { NavLink as RRNavLink } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Row,
  Col,
} from "reactstrap";
import classes from "./main.module.css";

const Main = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const logo = (
    <img
      src="img/Images/logo1.png"
      style={{ height: "87px", width: "220px", marginTop: "10px" }}
      alt="logo-1"
    />
  );

  return (
    <Row>
      <Navbar
        fixed="top"
        color="white"
        light
        expand="md"
        backGround=" transparent"
        zIndex="1030"
      >
        <NavbarBrand>{logo}</NavbarBrand>

        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Col sm="12" md={{ size: 12, offset: 3 }}>
            <Nav className={classes.navs} navbar>
              <NavItem color="black">
                <NavLink
                  className={classes.alinks}
                  tag={RRNavLink}
                  exact
                  to="/"
                  activeClassName="active"
                  activeStyle={{ borderBottom: "5px solid #cc0000" }}
                >
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classes.alinks}
                  tag={RRNavLink}
                  to="/about"
                  activeClassName="active"
                  activeStyle={{ borderBottom: "5px solid #cc0000" }}
                >
                  About
                </NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle
                  nav
                  caret
                  className={classes.alinks}
                  activeClassName="active"
                  activeStyle={{ borderBottom: "5px solid #cc0000" }}
                >
                  Solutions
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    <NavLink
                      className={classes.alinks}
                      tag={RRNavLink}
                      to="/cctv"
                    >
                      CCTV Systems
                    </NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink
                      className={classes.alinks}
                      tag={RRNavLink}
                      to="/fire"
                    >
                      Fire Alaram & Detection Systems
                    </NavLink>
                  </DropdownItem>

                  <DropdownItem>
                    <NavLink
                      className={classes.alinks}
                      tag={RRNavLink}
                      to="/public address"
                    >
                      Public Address System
                    </NavLink>
                  </DropdownItem>

                  <DropdownItem>
                    <NavLink
                      className={classes.alinks}
                      tag={RRNavLink}
                      to="/building"
                    >
                      Building Management System
                    </NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink
                      className={classes.alinks}
                      tag={RRNavLink}
                      to="/access control system"
                    >
                      Access Control System
                    </NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink
                      className={classes.alinks}
                      tag={RRNavLink}
                      to="/physical security system"
                    >
                      Physical Security System
                    </NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink
                      className={classes.alinks}
                      tag={RRNavLink}
                      to="/boardroom sysyem"
                    >
                      Boardroom Systems
                    </NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink
                      className={classes.alinks}
                      tag={RRNavLink}
                      to="/it & networking sysyems"
                    >
                      IT & Networking Systems
                    </NavLink>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <NavLink
                  className={classes.alinks}
                  tag={RRNavLink}
                  to="/our clients"
                  activeClassName="active"
                  activeStyle={{ borderBottom: "5px solid #cc0000" }}
                >
                  Our Clients
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classes.alinks}
                  tag={RRNavLink}
                  to="/partners"
                  activeClassName="active"
                  activeStyle={{ borderBottom: "5px solid #cc0000" }}
                >
                  partners
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink
                  className={classes.alinks}
                  tag={RRNavLink}
                  to="/media center"
                  activeClassName="active"
                  activeStyle={{ borderBottom: "5px solid #cc0000" }}
                >
                  Media Center
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classes.alinks}
                  tag={RRNavLink}
                  to="/contact"
                  activeClassName="active"
                  activeStyle={{ borderBottom: "5px solid #cc0000" }}
                >
                  Contact
                </NavLink>
              </NavItem>
            </Nav>
          </Col>
        </Collapse>
      </Navbar>
    </Row>
  );
};

export default Main;
