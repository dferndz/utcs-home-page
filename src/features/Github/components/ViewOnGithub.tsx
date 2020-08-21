import React from "react";
import { SiGithub } from "react-icons/si";

type Props = {
  path: string;
  text?: string;
  Icon?: any;
  variant?: string;
  size?: string;
  noIcon?: boolean;
  noMt?: boolean;
};

const ViewOnGithub = ({
  path,
  text,
  Icon,
  variant,
  size,
  noIcon,
  noMt,
}: Props) => (
  <a
    className={`${noMt ? null : "mt-4"} btn btn-${
      variant ? variant : "outline-primary"
    } btn-block ${size ? `btn-${size}` : null}`}
    target="_blank"
    rel="noopener noreferrer"
    href={path}
  >
    {text ? text : "View on Github"}
    {!noIcon ? (
      Icon ? (
        <Icon className="ml-2" />
      ) : (
        <SiGithub className="ml-2" />
      )
    ) : null}
  </a>
);

export default ViewOnGithub;
