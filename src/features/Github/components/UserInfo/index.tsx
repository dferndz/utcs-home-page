import React from "react";
import { Card, Image, Col, Row } from "react-bootstrap";
import { MdLocationOn } from "react-icons/md";
import { FiUsers } from "react-icons/fi";
import Tag from "../Tag";

import useUser from "../../hooks/useUser";
import LoadingPlaceHolder from "./Loading";

const UserInfo = () => {
  const { data, isLoading, errors } = useUser();

  if (isLoading) return <LoadingPlaceHolder />;

  if (data && !errors)
    return (
      <Card.Body>
        <Row>
          <Col md={4}>
            <Image src={data.avatar_url} roundedCircle fluid />
          </Col>
          <Col md={8}>
            <h5>{data.name}</h5>
            <p className="text-muted mb-2" style={{ margin: "0" }}>
              {data.login}
            </p>
            {data.location && (
              <Tag Component={MdLocationOn} data={data.location} />
            )}
          </Col>
          <Col md={12} className="mt-4">
            <p>{data.bio}</p>
          </Col>
          <Col md={12}>
            <a
              className="btn btn-secondary btn-block"
              target="_blank"
              href={data.html_url}
              rel="noopener noreferrer"
            >
              View on Github
            </a>
          </Col>
          <Col className="text-muted mt-4" md={12}>
            <FiUsers className="mr-2" />
            <span className="mr-2">
              {data.followers} follower
              {data.followers && data.followers !== 1 ? "s" : null}
            </span>
            <span className="mr-2">{data.following} following </span>
          </Col>
        </Row>
      </Card.Body>
    );

  return (
    <Card>
      <Card.Body className="text-center">
        <p>Something went wrong</p>
      </Card.Body>
    </Card>
  );
};

export default UserInfo;
