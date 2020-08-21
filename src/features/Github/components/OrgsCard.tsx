import React from "react";
import { Card, Image, Row, Col } from "react-bootstrap";
import { OrganizationInfo } from "../types";
import ViewOnGithub from "./ViewOnGithub";
import useOrgs from "../hooks/useOrgs";

export type OrgItemProps = {
  org: OrganizationInfo;
  last?: boolean;
};

export const OrgItem = ({ org, last }: OrgItemProps) => {
  return (
    <Row className={`align-items-center ${last ? null : "mb-4"}`}>
      <Col xs={3}>
        <Image fluid roundedCircle src={org.avatar_url} />
      </Col>
      <Col xs={4}>
        <Row>{org.login}</Row>
      </Col>
      <Col className="text-right">
        <ViewOnGithub
          text="View on Github"
          variant="outline-secondary"
          size="sm"
          path={`https://github.com/${org.login}`}
          noIcon
          noMt
        />
      </Col>
    </Row>
  );
};

const OrgsCard = () => {
  const { data, errors } = useOrgs();
  if (data && !errors)
    return (
      <Card.Body className="mb-4">
        <h6>Organizations</h6>
        <hr />
        {data.map((org: OrganizationInfo, key: number) => (
          <OrgItem org={org} key={key} last={key === data.length - 1} />
        ))}
      </Card.Body>
    );
  return null;
};

export default OrgsCard;
