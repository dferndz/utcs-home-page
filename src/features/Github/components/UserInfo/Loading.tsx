import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const SkeletonCard = () => (
  <div className="ph-item">
    <div className="ph-col-2">
      <div className="ph-avatar"></div>
    </div>

    <div>
      <div className="ph-row">
        <div className="ph-col-8"></div>
        <div className="ph-col-4 empty"></div>
        <div className="ph-col-4"></div>
        <div className="ph-col-8 empty"></div>
        <div className="ph-col-4"></div>
        <div className="ph-col-8 empty"></div>
      </div>
    </div>

    <div className="ph-col-12">
      <div className="ph-row">
        <div className="ph-col-4"></div>
        <div className="ph-col-8 empty"></div>
        <div className="ph-col-6"></div>
        <div className="ph-col-6 empty"></div>
        <div className="ph-col-12"></div>
      </div>
    </div>

    <div className="ph-col-12">
      <div style={{ height: "40px" }} className="ph-picture"></div>
    </div>

    <div>
      <div className="ph-row">
        <div className="ph-col-6"></div>
        <div className="ph-col-6 empty"></div>
        <div className="ph-col-2"></div>
        <div className="ph-col-10 empty"></div>
        <div className="ph-col-8"></div>
        <div className="ph-col-4 empty"></div>
        <div className="ph-col-12"></div>
      </div>
    </div>
  </div>
);

const LoadingPlaceHolder = () => <SkeletonCard />;

export default LoadingPlaceHolder;
