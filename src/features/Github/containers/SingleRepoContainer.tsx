import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import RepoPage from "../components/RepoPage";
import { useParams } from "react-router-dom";
import { useCv } from "../../../context";

type Params = {
  repo: string;
};

const SingleRepoContainer = () => {
  const cv = useCv();
  const { repo } = useParams<Params>();

  if (!cv.profile?.github)
    return (
      <Container className="mt-4">
        <Row>
          <Col md={12} className="text-center">
            <p>To connect to Github add a github username to your profile.</p>
          </Col>
        </Row>
      </Container>
    );

  return <RepoPage user={cv.profile.github} repo={repo} />;
};

export default SingleRepoContainer;
