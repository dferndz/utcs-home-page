import React from "react";

type Props = {
  Component: any;
  data: any;
  text?: string;
  as_link?: boolean;
};

const Tag = ({ Component, data, text, as_link }: Props) => {
  if (as_link)
    return (
      <a className="mr-3" href={data}>
        <Component className="mr-2" />
        {text ? text : data}
      </a>
    );
  return (
    <>
      <Component className="mr-2" />
      {text && <span className="mr-2">{text}:</span>}
      <span className="mr-4">{data}</span>
    </>
  );
};

export default Tag;
