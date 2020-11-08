import React from "react";
import { Link } from "react-router-dom";
import {
  Nav,
  Navbar,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Image,
} from "react-bootstrap";
import { AuthUserContext } from "../Session";
import SignOutButton from "../SignOut";
import * as ROUTES from "../../constants/routes";
import * as ROLES from "../../constants/roles";
import "bootstrap/dist/css/bootstrap.min.css";

const Navigation = () => (
  <div>
    <AuthUserContext.Consumer>
      {(authUser) =>
        authUser ? (
          <NavigationAuth authUser={authUser} />
        ) : (
          <NavigationNonAuth />
        )
      }
    </AuthUserContext.Consumer>
  </div>
);

const NavigationAuth = ({ authUser }) => (
  <Navbar bg="light" expand="lg" >
    <Navbar.Brand href={ROUTES.HOME} style={{display:'flex', alignItems:'center'}}>
      <img src="/logo.svg" width="60" height="60" className="d-inline-block align-top" alt="Logo" />
      InnovateHub
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mx-auto">
        <Nav.Link href={ROUTES.POST_CHALLENGE}>Post New Challenge</Nav.Link>
        <Nav.Link href={ROUTES.CHALLENGES}>All Challenges</Nav.Link>
        <Nav.Link href={ROUTES.PROJECTS}>All Projects</Nav.Link>
      </Nav>
      <NavDropdown title="Account" id="basic-nav-dropdown">
        <NavDropdown.Item href={ROUTES.ADMIN}>Account</NavDropdown.Item>
        <NavDropdown.Item>
          <SignOutButton />
        </NavDropdown.Item>
      </NavDropdown>
    </Navbar.Collapse>
  </Navbar>
);

const NavigationNonAuth = () => (
  <Navbar bg="light" expand="lg">
    <Navbar.Brand Link="#home">InnovateHub</Navbar.Brand>
    {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href={ROUTES.LANDING}>Home</Nav.Link>
        <Nav.Link href={ROUTES.SIGN_IN}>Sign In</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default Navigation;
