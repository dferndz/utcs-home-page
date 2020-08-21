import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import RepoPage from "../components/RepoPage";
import { useParams } from "react-router-dom";
import { GITHUB_USERNAME } from "../../../constants";

type Params = {
  repo: string;
};

const SingleRepoContainer = () => {
  const { repo } = useParams<Params>();

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

  return <RepoPage user={GITHUB_USERNAME} repo={repo} />;
};

export default SingleRepoContainer;
