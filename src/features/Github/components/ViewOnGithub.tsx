import React from "react";
import { SiGithub } from "react-icons/si";

type Props = {
  path: string;
  text?: string;
  Icon?: any;
  variant?: string;
};

const ViewOnGithub = ({ path, text, Icon, variant }: Props) => (
  <a
    className={`mt-4 btn btn-${
      variant ? variant : "outline-primary"
    } btn-block`}
    target="_blank"
    href={path}
  >
    {text ? text : "View on Github"}
    {Icon ? <Icon className="ml-2" /> : <SiGithub className="ml-2" />}
  </a>
);

export default ViewOnGithub;
