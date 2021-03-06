import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import UserInfo from "../components/UserInfo";
import OrgsCard from "../components/OrgsCard";
import ReposGrid from "../components/ReposGrid";

const ReposContainer = () => {
  return (
    <Container className="mt-4">
      <Row>
        <Col md={4}>
          <UserInfo />
          <OrgsCard />
        </Col>
        <Col md={8}>
          <ReposGrid />
        </Col>
      </Row>
    </Container>
  );
};

export default ReposContainer;
