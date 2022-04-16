import React, { useState } from "react";
import {
  Navbar,
  Nav,
  Container,
  Button,
  Form,
  FormControl,
  InputGroup,
} from "react-bootstrap";
import { navigate } from "gatsby";
import logo from "../images/logo1.svg";
import "./Header.css";

const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const handleSubmit = (e) => {
    if (e.target.checkValidity() && searchTerm) {
      e.preventDefault();
      console.log("urmom");
      navigate(`/searchResults?term=${searchTerm}`);
    }
  }

  return (
    <Navbar collapseOnSelect expand="md">
      <Navbar.Brand href="/">
        <img id="logo" src={logo} height="100" alt="yellowpages" />
      </Navbar.Brand>
      <Nav>
        <Form onSubmit={(e) => handleSubmit(e)}>
          <InputGroup className="search-bar">
            <FormControl
              type="search"
              placeholder="Search by location…"
              className="search-box"
              aria-label="Search"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Button type="submit">Search</Button>
          </InputGroup>
        </Form>
      </Nav>
    </Navbar>
  );
};

export default Header;
