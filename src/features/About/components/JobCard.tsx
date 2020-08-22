import React from "react";
import { Job } from "../../../types";

type Props = {
  item: Job;
};

const SchoolCard = ({ item }: Props) => {
  return (
    <div className="mb-4">
      <p style={{ margin: "0" }}>
        <strong>{item.employer}</strong>
      </p>
      <span>{`${item.position}, ${item.department}`}</span>
      <br />
      <span className="text-muted">{item.details}</span>
    </div>
  );
};

export default SchoolCard;
