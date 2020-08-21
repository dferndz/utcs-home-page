import React from "react";
import useReadme from "../../hooks/useReadme";
import { Repo } from "../../types";
import marked from "marked";

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

  if (isLoading) return <p>Loading...</p>;

  if (data)
    return <div dangerouslySetInnerHTML={{ __html: marked(data) }}></div>;

  return <p>Ne readme</p>;
};

export default ReadmeCard;
