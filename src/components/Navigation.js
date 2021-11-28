import React, { Component } from "react";
import { Navbar, Row, Col, Nav, Container, Button, Form, NavDropdown, FormControl } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Market from "./Market";
import Signin from "./Signin";
import Signup from "./Signup";

export default class Navigation extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar bg="transparent" expand="lg">
          <Nav.Link as={Link} to="/Market">
            <Navbar.Brand href="#home">Nfties</Navbar.Brand>
            </Nav.Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                
                  
                
                <Nav.Link as={Link} to="/Signin">
                  Sign In
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
        <div>
          <Switch>
            <Route path="/Market">
              <Market />
            </Route>

            <Route path="/Signin">
              <Signin />
            </Route>
            <Route path="/Signup">
              <Signup />
            </Route>

            <Route path="/">
              <Market />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}
