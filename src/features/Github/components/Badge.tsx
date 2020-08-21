import React from "react";
import { Badge } from "react-bootstrap";

type Props = {
  title: string;
  variant?: string;
};

const RepoBadge = ({ title, variant }: Props) => {
  return (
    <Badge className="mr-1" pill variant={variant ? variant : "secondary"}>
      {title}
    </Badge>
  );
};

export default RepoBadge;
