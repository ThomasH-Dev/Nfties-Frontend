import React from 'react';
import { Navbar, Nav, Container, Button, Form, NavDropdown, FormControl } from 'react-bootstrap';

const Navigation = (props) => (
    <div>
    <Navbar bg="transparent" expand="lg">
    <Navbar.Brand href="#home">Nfties</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">Link</Nav.Link>
        
       
      </Nav>
      
    </Navbar.Collapse>
  </Navbar>
  </div>
);

export default Navigation;