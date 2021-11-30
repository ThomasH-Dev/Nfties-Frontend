import React, { Component } from "react";
import { Container, Row, Col, Image,Button } from "react-bootstrap";
import placeholder from "../img/placeholder1.png";
import { Link } from "react-router-dom";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col>
              <div className="textAlign"></div>
              <h1> Image Title</h1>

              <p>
                {" "}
                <b>Edition 1 of 1</b>
              </p>

              <div className="textAlign"></div>
              <p>
                {" "}
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>

              <p className="textAlign"></p>
              <small className="text-muted">
                    <p>List Price</p>
                  </small>
             
                <span className = "largeText"><b>4.955</b></span>
                <small><span><b>Ether</b></span></small>
                <p>&nbsp;</p>
                <Link to="/Signup" style={{ textDecoration: "none" }}><Button variant="outline-dark">Sign Up</Button></Link>



            </Col>

            <Col xs={4}>
              <Image className="textAlign" src={placeholder} thumbnail />
            </Col>

            <Col>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
              <div className="textAlign">
                <div className="adjust-line-height">
                  <p>@username</p>
                  <small className="text-muted">
                    <p>Artist</p>
                  </small>
                </div>
                &nbsp;
                <div className="adjust-line-height">
                  <p>@username</p>
                  <small className="text-muted">
                    <p>User</p>
                  </small>

                  <hr className="textAlign"></hr>

                  <p><b>200</b></p>
                  <small className="text-muted">
                    <p>Favorite</p>
                  </small>
                  <p>&nbsp;</p>
                  <p>&nbsp;</p>
                  <p><b>2000</b></p>
                  <small className="text-muted">
                    <p>Views</p>
                  </small>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

