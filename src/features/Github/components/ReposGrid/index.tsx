import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import useRepos from "../../hooks/useRepos";
import RepoCard from "../RepoCard";
import { Repo } from "../../types";
import LoadingPlaceHolder from "./Loading";

const ReposGrid = () => {
  const { data, isLoading, errors } = useRepos();
  if (isLoading) return <LoadingPlaceHolder />;
  if (data && !errors)
    return (
      <Container style={{ overflowY: "scroll", height: "90vh" }}>
        <Row>
          {data.map((repo: Repo, key: number) => (
            <Col className="mb-4" md={6} key={key}>
              <RepoCard repo={repo} />
            </Col>
          ))}
        </Row>
      </Container>
    );

  return (
    <Container>
      <Row>
        <Col md={12} className="text-center">
          <div style={{ marginTop: "200px" }}>
            <h4>Something went wrong</h4>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ReposGrid;
