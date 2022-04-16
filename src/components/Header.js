import React from 'react';
import { Navbar, Nav, Container, Button, Form, FormControl } from 'react-bootstrap';
import { Link } from 'gatsby';
import logo from '../images/logo1.svg';
import './Header.css';

const Header = () => {
  return (
    <Navbar collapseOnSelect expand="md">
      <Navbar.Brand href="/">
        <img id="logo" src={logo} height="100" alt="yellowpages" />
      </Navbar.Brand>
      <Nav aria-controls="responsive-navbar-nav">
        <Form className="d-flex">
          <FormControl
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Nav>
      {/* <Navbar.Collapse id="responsive-navbar-nav"> */}
        {/* <Nav className="me-auto">
          <Nav.Link href="/howitworks">How it works</Nav.Link>
          <Nav.Link href="/contact">Contact</Nav.Link>
        </Nav> */}
      {/* </Navbar.Collapse> */}
    </Navbar>
  );
};

export default Header;
