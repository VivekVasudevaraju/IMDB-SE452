import React from "react";
import { Col } from "react-bootstrap";
import './AwardSection.css'

function SingleAward({awardTitle}) {
  return (
    <Col lg={12} className="single-award-container border-left-orange mb-3">
      <div className="award-text-container">
        <p>{awardTitle}</p>
      </div>
    </Col>
  );
}

export default SingleAward;
