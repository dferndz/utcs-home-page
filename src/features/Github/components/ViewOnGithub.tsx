import React from "react";
import { SiGithub } from "react-icons/si";

type Props = {
  path: string;
};

const ViewOnGithub = ({ path }: Props) => (
  <a
    className="mt-4 btn btn-outline-primary btn-block"
    target="_blank"
    href={path}
  >
    View on Github <SiGithub className="ml-2" />
  </a>
);

export default ViewOnGithub;
