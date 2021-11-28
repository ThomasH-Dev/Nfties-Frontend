import { useWeb3React } from "@web3-react/core";
import React, { Component } from "react";
import { Navbar, Row, Col, Nav, Container, Button, Card } from 'react-bootstrap';
import fox from "../img/fox.png";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Signup from "./Signup";


import { injected } from "../components/Wallet/connectors";

export default function Signin() {
  const { active, account, library, connector, activate, deactivate } =
    useWeb3React();

  async function connect() {
    try {
      await activate(injected);
    } catch (ex) {
      console.log(ex);
    }
  }

  async function disconnect() {
    try {
      deactivate();
    } catch (ex) {
      console.log(ex);
    }
  }

  return (
    <div>
      <h1 class="headerTitle"> My Wallet</h1>
      <Container>
        <Row>
          <Col />
          <Col>
            <Card className="text-center" style={{ width: "fluid" }}>
              <p></p>
              <Card.Title> <img src={fox} width="30" height="30"/> MetaMask</Card.Title>
              <Card.Text> Connect to your MetaMask Wallet </Card.Text>
              <Card.Body>
                <Card.Text>
                  {active ? (
                    <span>
                      Connected with <b>{account}</b>
                      <p></p>
                      
                      <Nav.Link as={Link} to="/Signup">
                      <h3> No account? create one here</h3>
                </Nav.Link>
                      <p></p>
                <Button onClick={disconnect} variant="primary">
                  {" "}
                  Disonnect
                </Button>
                    </span>
                  ) : (
                    <span>
                        
                        <Button onClick={connect} variant="primary">
                            
                  {" "}
                  Connect
                </Button>
                <p/>
                <p>Not connected</p>
                    </span>
                  )}
                </Card.Text>
                
               
              </Card.Body>
            </Card>
          </Col>
          <Col />
        </Row>
      </Container>
    </div>
  );
}
