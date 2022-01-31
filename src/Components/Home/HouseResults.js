import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function HouseResults() {
  return (
    <div>
      <Container className="single-property">
        <Row className="property-name">
          <Col sm={8}>
            <h5>House1</h5>
            <p>Location</p>
          </Col>
        </Row>
        <Row className="property-details">
          <Col sm={4} className="prop-img">
            <img
              src="https://st4.depositphotos.com/16030310/25210/v/600/depositphotos_252105266-stock-illustration-vector-illustration-silver-golden-letters.jpg"
              alt="house"
              width={200}
            />
          </Col>
          <Col sm={4} className="prop-info1">
            <h5>Details</h5>
          </Col>
          <Col sm={4} className="prop-info2">
            <h5>Details</h5>
          </Col>
        </Row>
      </Container>
      <Container className="single-property">
        <Row className="property-name">
          <Col sm={8}>
            <h5>House2</h5>
            <p>Location</p>
          </Col>
        </Row>
        <Row className="property-details">
          <Col sm={4} className="prop-img">
            <img
              src="https://st4.depositphotos.com/16030310/25210/v/600/depositphotos_252105266-stock-illustration-vector-illustration-silver-golden-letters.jpg"
              alt="house"
              width={200}
            />
          </Col>
          <Col sm={4} className="prop-info1">
            <h5>Details</h5>
          </Col>
          <Col sm={4} className="prop-info2">
            <h5>Details</h5>
          </Col>
        </Row>
      </Container>
      {/* <Container>
        <Row>
          <Col sm={8}>
            <h5>Pg2</h5>
            <p>Location</p>
          </Col>
        </Row>
        <Row>
          <Col sm={4}>
            <h5>Images</h5>
          </Col>
          <Col sm={4}>
            <h5>Details</h5>
          </Col>
        </Row>
      </Container> */}
    </div>
  );
}

export default HouseResults;
