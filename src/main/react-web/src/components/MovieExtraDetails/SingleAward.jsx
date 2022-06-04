import React from "react";
import { Col } from "react-bootstrap";
import './AwardSection.css'

function SingleAward() {
  return (
    <Col lg={12} className="single-award-container border-left-orange mb-3">
      <div className="award-text-container">
        <p>MTV Movie Award for Best Villain</p>
      </div>
    </Col>
  );
}

export default SingleAward;
