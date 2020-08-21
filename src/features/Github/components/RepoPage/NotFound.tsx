import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const NotFound = () => (
  <Container>
    <Row>
      <Col md={12} className="text-center mt-4">
        <h3>Repo not found</h3>
      </Col>
    </Row>
  </Container>
);

export default NotFound;
