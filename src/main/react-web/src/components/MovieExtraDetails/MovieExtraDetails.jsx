import React from "react";
import { Col, Row } from "react-bootstrap";
import ReviewSection from "./ReviewSection";
import './MovieExtraDetails.css'
import AwardSection from "./AwardSection";

function MovieExtraDetails() {
  return (
    <Row className="mt-5">
      <Col lg={6}>
        <Row>
          <ReviewSection />
          <AwardSection />
        </Row>
      </Col>
      <Col lg={6}></Col>
    </Row>
  );
}

export default MovieExtraDetails;
