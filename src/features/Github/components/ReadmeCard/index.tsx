import React from "react";
import useReadme from "../../hooks/useReadme";
import { Repo } from "../../types";
import marked from "marked";
import { Col, Container, Row } from "react-bootstrap";
import Loading from "./Loading";

type Props = {
  repo: Repo;
  user: string;
};

const ReadmeCard = ({ user, repo }: Props) => {
  const { data, isLoading, errors } = useReadme(
    user,
    repo.name,
    repo.default_branch
  );

  if (isLoading) return <Loading />;

  if (data)
    return (
      <Container
        style={{ overflowY: "scroll", height: "90vh" }}
        dangerouslySetInnerHTML={{ __html: marked(data) }}
      ></Container>
    );

  return (
    <Container className="mt-4">
      <Row>
        <Col md={12} className="text-center">
          <h3>This repository does not have a README.md</h3>
        </Col>
      </Row>
    </Container>
  );
};

export default ReadmeCard;
