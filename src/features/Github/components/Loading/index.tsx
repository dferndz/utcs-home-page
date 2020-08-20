import React from "react";
import { Spinner } from "react-bootstrap";

const Loading = ({ style }: any) => (
  <div style={style}>
    <Spinner className="mr-2" animation="grow" variant="primary" />
    <Spinner className="mr-2" animation="grow" variant="success" />
    <Spinner className="mr-2" animation="grow" variant="danger" />
    <Spinner animation="grow" variant="warning" />
  </div>
);

export default Loading;
