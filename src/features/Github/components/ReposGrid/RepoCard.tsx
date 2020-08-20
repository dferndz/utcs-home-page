import React from "react";
import { Card, Row, Col, Badge } from "react-bootstrap";
import { BsStar, BsEye } from "react-icons/bs";
import { RiExternalLinkLine } from "react-icons/ri";
import { Repo } from "../../types";

type Props = {
  repo: Repo;
};

const RepoCard = ({ repo }: Props) => {
  return (
    <Card>
      <Card.Body>
        <h5 className="text-primary">
          <a target="_blank" href={repo.html_url}>
            {repo.name} <RiExternalLinkLine />
          </a>
        </h5>

        <span>{repo.description}</span>
        <h5 className="mt-2">
          <Badge className="mr-1" pill variant="secondary">
            {repo.language}
          </Badge>
          {repo.license && (
            <Badge className="mr-1" pill variant="secondary">
              {repo.license.name}
            </Badge>
          )}
        </h5>
        <span>
          {repo.stargazers_count > 0 && (
            <>
              <BsStar className="mr-2" />
              <span className="mr-4">{repo.stargazers_count}</span>
            </>
          )}
          {repo.watchers_count > 0 && (
            <>
              <BsEye className="mr-2" />
              <span>{repo.watchers_count}</span>
            </>
          )}
        </span>
      </Card.Body>
    </Card>
  );
};

export default RepoCard;
