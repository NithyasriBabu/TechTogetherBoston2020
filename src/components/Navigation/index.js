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
  <Navbar bg="light" expand="lg">
    <Navbar.Brand href={ROUTES.HOME}>
      <img
        src="https://cdn.discordapp.com/attachments/774033076812120077/774490722794995743/logo11_7_42634.png"
        width="60"
        height="60"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      />
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href={ROUTES.POST_CHALLENGE}>Post a Challenge</Nav.Link>
        <Nav.Link href={ROUTES.PROJECTS}>Projects</Nav.Link>
      </Nav>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-success">Search</Button>
      </Form>
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
