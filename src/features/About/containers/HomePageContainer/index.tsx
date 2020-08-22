import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import { useCv } from "../../../../context";
import UserCard from "../../components/UserCard";
import Page from "../../components/Page";
import Section from "../../components/Section";
import SchoolCard from "../../components/SchoolCard";
import JobCard from "../../components/JobCard";

const HomePage = () => {
  const cv = useCv();
  return (
    <Container className="mt-4">
      <Row>
        <Col md={4}>
          <UserCard profile={cv!.profile} social={cv?.social} />
        </Col>
        <Col md={8} style={{ overflowY: "scroll", height: "90vh" }}>
          <Page about={cv!.pages.about} />
          <Section
            title="Experience"
            items={cv!.jobs.reverse()}
            Component={JobCard}
          />
          <Section
            title="Education"
            items={cv!.schools}
            Component={SchoolCard}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
