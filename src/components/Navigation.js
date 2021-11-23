import React, { Component } from "react";
import { Navbar, Row, Col, Nav, Container, Button, Form, NavDropdown, FormControl } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Wallet from "./Wallet";
import Market from "./Market";
import Signin from "./Signin";

export default class Navigation extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar bg="transparent" expand="lg">
            <Navbar.Brand href="#home">Nfties</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link as={Link} to="/Market">
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to="/Wallet">
                  Wallet
                </Nav.Link>
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
            
            <Route path="/Wallet">
              <Wallet />
            </Route>

            <Route path="/Signin">
              <Signin />
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
