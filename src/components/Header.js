import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link } from 'gatsby';
import logo from '../images/logo1.svg';
import './Header.css';

const Header = () => {
  return (
    <Navbar collapseOnSelect expand="md">
      <Container>
        <Navbar.Brand href="/">
          <img id="logo" src={logo} height="100" alt="yellowpages" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/howitworks">How it works</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
