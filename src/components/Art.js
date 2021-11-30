import React from "react";
import { Card, Button } from "react-bootstrap";
import placeholder from "../img/placeholder1.png";
import { Link } from "react-router-dom";
import "../index.css";

const Art = () => {
  const listPrice = "4.995Ξ($21,433)";
  const lastSalePrice = "2.09Ξ($1,560)";
  const imageTitle = "Image Title";

  return (
    <div>
      <Link to="/CardDetails" style={{ textDecoration: "none" }}>
        <Card style={{ width: "fluid" }}>
          <Card.Img variant="top" src={placeholder} />
          <Card.Body>
            <Card.Title>{imageTitle}</Card.Title>
            <Card.Text>
              <div className="adjust-line-height">
                &nbsp;
                <medium>
                  <p>
                    
                    <span>{listPrice}</span>
                    <span> &nbsp;&nbsp;{lastSalePrice} </span>
                  </p>
                </medium>
                <small>
                  {" "}
                  <span>List price &nbsp;</span>{" "}
                </small>
                <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                <small>
                  {" "}
                  <span>Last sale price</span>{" "}
                </small>
                <hr></hr>
                <small className="text-muted">
                  <span>Artist</span>
                  <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  <span>Owner</span>
                
                </small>
              </div>
            </Card.Text>
          </Card.Body>
        </Card>
      </Link>
    </div>
  );
};

export default Art;