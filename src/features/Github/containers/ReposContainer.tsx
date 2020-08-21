import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import UserInfo from "../components/UserInfo";
import ReposGrid from "../components/ReposGrid";
import { useCv } from "../../../context";

const ReposContainer = () => {
  const cv = useCv();
  if (!cv.profile?.github)
    return (
      <Container className="mt-4">
        <Row>
          <Col md={12} className="text-center">
            <h3>
              To connect to Github, specify a github username in your profile.
            </h3>
          </Col>
        </Row>
      </Container>
    );

  return (
    <Container className="mt-4">
      <Row>
        <Col md={4}>
          <UserInfo user={cv.profile.github} />
        </Col>
        <Col md={8}>
          <ReposGrid user={cv.profile.github} />
        </Col>
      </Row>
    </Container>
  );
};

export default ReposContainer;
