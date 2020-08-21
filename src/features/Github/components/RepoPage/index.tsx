import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import useRepo from "../../hooks/useRepo";

import Loading from "./Loading";
import RepoNotFound from "./NotFound";
import RepoCard from "../RepoCard";
import LicenseCard from "../LicenseCard";
import ReadmeCard from "../ReadmeCard";

type Props = {
  user: string;
  repo: string;
};

const RepoPage = ({ repo, user }: Props) => {
  const { data, isLoading, errors } = useRepo(user, repo);

  if (isLoading) return <Loading />;
  if (data && !errors)
    return (
      <Container className="mt-4">
        <Row>
          <Col style={{ height: "90vh", overflowY: "scroll" }} md={4}>
            <RepoCard extra repo={data} />
            {data.license && (
              <LicenseCard
                className="mt-4 mb-4"
                license={data.license.key}
                username={user}
                repo={data.name}
                branch={data.default_branch}
              />
            )}
          </Col>
          <Col md={8}>
            <ReadmeCard repo={data} user={user} />
          </Col>
        </Row>
      </Container>
    );
  return <RepoNotFound />;
};

export default RepoPage;
