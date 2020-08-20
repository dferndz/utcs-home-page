import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import useRepos from "../../hooks/useRepos";
import RepoCard from "./RepoCard";
import { Repo } from "../../types";
import LoadingPlaceHolder from "./Loading";

type Props = {
  user: string;
};

const ReposGrid = ({ user }: Props) => {
  const { data, isLoading, errors } = useRepos(user);
  if (isLoading) return <LoadingPlaceHolder />;
  if (data)
    return (
      <Container>
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
