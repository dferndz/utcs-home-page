import React from "react";
import { Card } from "react-bootstrap";
import { BsStar, BsEye } from "react-icons/bs";
import { VscIssues } from "react-icons/vsc";
import { BiGitRepoForked } from "react-icons/bi";
import { Repo } from "../types";
import Badge from "./Badge";
import Tag from "./Tag";
import Link from "../../../components/Navbar/Link";
import ViewOnGithub from "./ViewOnGithub";
import { HiOutlineExternalLink } from "react-icons/hi";

type Props = {
  repo: Repo;
  extra?: boolean;
  className?: string;
};

const RepoCard = ({ repo, extra, className }: Props) => {
  return (
    <Card className={className}>
      <Card.Body>
        <h5 className="text-primary">
          <Link as_a title={repo.full_name} path={`/repos/${repo.full_name}`} />
        </h5>
        <span>{repo.description}</span>
        <h5 className="mt-2 mb-4">
          <Badge title={repo.language} />
          {repo.license && <Badge title={repo.license.name} />}
        </h5>

        {extra && (
          <>
            <Tag Component={BiGitRepoForked} data={repo.forks} text="forks" />
            <Tag Component={VscIssues} data={repo.open_issues} text="issues" />
          </>
        )}

        <ViewOnGithub path={repo.html_url} />
        {extra && repo.has_pages && (
          <ViewOnGithub
            Icon={HiOutlineExternalLink}
            variant="secondary"
            text="Go to repo page"
            path={`https://${repo.owner.login}.github.io/${repo.name}`}
          />
        )}
      </Card.Body>
      {(repo.stargazers_count > 0 || repo.watchers_count > 0) && (
        <Card.Footer className="mt-2">
          {repo.stargazers_count > 0 && (
            <Tag Component={BsStar} data={repo.stargazers_count} />
          )}
          {repo.watchers_count > 0 && (
            <Tag Component={BsEye} data={repo.watchers_count} />
          )}
        </Card.Footer>
      )}
    </Card>
  );
};

export default RepoCard;
