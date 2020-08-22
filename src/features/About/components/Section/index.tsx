import React, { FC } from "react";
import { School } from "../../../../types";
import SchoolCard from "../SchoolCard";

type Props = {
  items: any[];
  title: string;
  Component: any;
};

const SchoolSection = ({ items, title, Component }: Props) => {
  return (
    <div>
      <br />
      <h3>{title}</h3>
      <hr />
      {items.map((item: any, key: number) => (
        <Component item={item} key={key} />
      ))}
    </div>
  );
};

export default SchoolSection;
