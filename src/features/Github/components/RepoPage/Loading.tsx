import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const SkeletonCard = () => (
  <div className="ph-item">
    <div className="ph-col-12">
      <div className="ph-row">
        <div className="ph-col-4"></div>
        <div className="ph-col-8 empty"></div>
        <div className="ph-col-12  mb-4"></div>
        <div className="ph-col-8"></div>
        <div className="ph-col-4 empty"></div>
        <div className="ph-col-4"></div>
        <div className="ph-col-8 empty"></div>
      </div>
    </div>
  </div>
);

const LoadingPlaceHolder = () => (
  <Container className="mt-4">
    <Row>
      <Col md={4}>
        <SkeletonCard />
        <SkeletonCard />
      </Col>
      <Col md={8}>
        <SkeletonCard />
        <SkeletonCard />
      </Col>
    </Row>
  </Container>
);

export default LoadingPlaceHolder;
