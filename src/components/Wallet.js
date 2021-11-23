import { useWeb3React } from "@web3-react/core";
import React, { Component } from "react";
import { Card, Button, Container,Row,Col } from "react-bootstrap";
import fox from "../img/fox.png";


import { injected } from "../components/Wallet/connectors";

export default function Wallet() {
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
                    </span>
                  ) : (
                    <span>Not connected</span>
                  )}
                </Card.Text>
                <Button onClick={connect} variant="primary">
                  {" "}
                  Connect
                </Button>
                <p></p>
                <Button onClick={disconnect} variant="primary">
                  {" "}
                  Disonnect
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col />
        </Row>
      </Container>
    </div>
  );
}
