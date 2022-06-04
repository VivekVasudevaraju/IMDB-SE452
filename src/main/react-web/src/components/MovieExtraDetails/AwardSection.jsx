import React from "react";
import { Col, Row } from "react-bootstrap";
import SingleAward from "./SingleAward";

function AwardSection() {
  return (
    <Col lg={{span: 5, offset:2}}>
      <Row>
        <Col lg={12} className="d-flex justify-content-between">
          <h3>Award</h3>
        </Col>
        <SingleAward />
      </Row>
    </Col>
  );
}

export default AwardSection;
