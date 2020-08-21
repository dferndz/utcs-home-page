import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import { useCv } from "../../../../context";
import UserCard from "../../components/UserCard";
import Page from "../../components/Page";

const HomePage = () => {
  const cv = useCv();
  return (
    <Container className="mt-4">
      <Row>
        <Col md={4}>
          <UserCard profile={cv!.profile} />
        </Col>
        <Col md={8} style={{ overflowY: "scroll", height: "90vh" }}>
          <Page about={cv!.pages.about} />
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
