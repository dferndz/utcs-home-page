import React from "react";

type Props = {
  Component: any;
  data: any;
  text?: string;
};

const Tag = ({ Component, data, text }: Props) => {
  return (
    <>
      <Component className="mr-2" />
      {text && <span className="mr-2">{text}:</span>}
      <span className="mr-4">{data}</span>
    </>
  );
};

export default Tag;
