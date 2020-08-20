import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import UserInfo from "../components/UserInfo";
import ReposGrid from "../components/ReposGrid";
import { GITHUB_USERNAME } from "../../../constants";

const ReposContainer = () => {
  if (!GITHUB_USERNAME)
    return (
      <Container className="mt-4">
        <Row>
          <Col md={12} className="text-center">
            <p>
              Set the environment valirable
              REACT_APP_GITHUB_USERNAME=your_github_username
            </p>
          </Col>
        </Row>
      </Container>
    );

  return (
    <Container className="mt-4">
      <Row>
        <Col md={4}>
          <UserInfo user={GITHUB_USERNAME} />
        </Col>
        <Col md={8}>
          <ReposGrid user={GITHUB_USERNAME} />
        </Col>
      </Row>
    </Container>
  );
};

export default ReposContainer;
