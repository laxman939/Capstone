import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function StaysResults() {
  return (
    <div>
      <h5> Results</h5>
      <hr />
      <Container className="single-property">
        <Row className="property-name">
          <Col sm={8}>
            <h5>Pg1</h5>
            <p>Location</p>
          </Col>
        </Row>
        <Row className="property-details">
          <Col sm={4} className="prop-img">
            <h5>Images</h5>
          </Col>
          <Col sm={4} className="prop-info1">
            <h5>Details</h5>
          </Col>
          <Col sm={4} className="prop-info2">
            <h5>Details</h5>
          </Col>
        </Row>
      </Container>
      <Container>
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
      </Container>
      <Container>
        <Row>
          <Col sm={8}>
            <h5>Pg3</h5>
            <p>Location</p>
          </Col>
        </Row>
        <Row>
          <Col sm={4}>
            <h4>Images</h4>
          </Col>
          <Col sm={4}>
            <h4>Details</h4>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default StaysResults;
