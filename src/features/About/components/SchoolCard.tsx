import React from "react";
import { School } from "../../../types";

type Props = {
  item: School;
};

const SchoolCard = ({ item }: Props) => {
  return (
    <div className="mb-4">
      <p style={{ margin: "0" }}>
        <strong>{item.name}</strong>
      </p>
      <span>{`${item.degree}, ${item.major}, ${item.graduation}`}</span>
      <br />
      <span className="text-muted">{item.details}</span>
    </div>
  );
};

export default SchoolCard;
