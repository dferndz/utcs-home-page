import React from "react";
import RepoPage from "../components/RepoPage";
import { useParams } from "react-router-dom";

type Params = {
  repo: string;
  user: string;
};

const SingleRepoContainer = () => {
  const { repo, user } = useParams<Params>();

  return <RepoPage user={user} repo={repo} />;
};

export default SingleRepoContainer;
