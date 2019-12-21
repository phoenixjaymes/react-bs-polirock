import React from 'react';
import { NavLink } from 'react-router-dom';

import {
  Container,
  Navbar,
  Nav,
  NavDropdown,
} from 'react-bootstrap';

import logo from '../../img/logo-react.jpg';

const Header = () => (
  <Container as="header" className="mb-4">
    <Navbar bg="none" expand="md" collapseOnSelect="true" className="border-bottom">
      <Navbar.Brand as={NavLink} to="/" href="#home"><img src={logo} alt="PoliRock logo" /></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />

      <Navbar.Collapse id="basic-navbar-nav">

        <Nav className="ml-auto">
          <Nav.Link as={NavLink} to="/" href="/home">Home</Nav.Link>

          <NavDropdown title="Bands" id="basic-nav-dropdown">
            <NavDropdown.Item as={NavLink} to="/major-label" href="/major-label">Major Label</NavDropdown.Item>
            <NavDropdown.Item as={NavLink} to="/indie" href="/indie">Indie</NavDropdown.Item>
            <NavDropdown.Item as={NavLink} to="/unsigned" href="/unsigned">Unsigned</NavDropdown.Item>
          </NavDropdown>

          <Nav.Link as={NavLink} to="/bandsaz" href="/bandsaz">Bands A-Z</Nav.Link>
          <Nav.Link as={NavLink} to="/legends" href="/legends">Legends</Nav.Link>

          <NavDropdown title="Sign Up" id="basic-nav-dropdown">
            <NavDropdown.Item as={NavLink} to="/bsignup" href="/bsignup">Band Sign Up</NavDropdown.Item>
            <NavDropdown.Item as={NavLink} to="/usignup" href="/usignup">User Sign Up</NavDropdown.Item>
          </NavDropdown>

          <Nav.Link as={NavLink} to="/login" href="/login">Login</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Container>

);

export default Header;
