import React from "react";
import Header from "./Header";
import Gallery from "./Gallery";
import { Container, Row, Col, Card } from 'react-bootstrap';


const Market = (props) => (
  <div>
    <Container>
      

        <Col>
          <Header />
          <Gallery />
        </Col>
        
      
    </Container>
  </div>
);

export default Market;
