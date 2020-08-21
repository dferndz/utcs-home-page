import React from "react";
import { Page as IPage } from "../../../../types";

type Props = {
  about: IPage;
};

const Page = ({ about }: Props) => {
  return (
    <div>
      <h3>{about.title}</h3>
      <hr />
      <p>{about.body}</p>
    </div>
  );
};

export default Page;
