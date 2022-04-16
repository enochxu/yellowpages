import React from "react";
import {
  Navbar,
  Nav,
  Container,
  Button,
  Form,
  FormControl,
  InputGroup,
} from "react-bootstrap";
import { Link } from "gatsby";
import logo from "../images/logo1.svg";
import "./Header.css";

const Header = () => {
  return (
    <Navbar collapseOnSelect expand="md">
      <Navbar.Brand href="/">
        <img id="logo" src={logo} height="100" alt="yellowpages" />
      </Navbar.Brand>
      <Nav>
        <InputGroup className="search-bar">
          <FormControl
            type="search"
            placeholder="Search by location…"
            className="search-box"
            aria-label="Search"
          />
          <Button>Search</Button>
        </InputGroup>
      </Nav>
    </Navbar>
  );
};

export default Header;
