import React from "react";
import { Col, Row } from "react-bootstrap";
import ReviewSection from "./ReviewSection";
import './MovieExtraDetails.css'
import AwardSection from "./AwardSection";
import CastSection from "./CastSection";

function MovieExtraDetails({reviews}) {
  return (
    <Row className="mt-5">
      <Col lg={6}>
        <Row>
          <ReviewSection reviews={reviews}/>
          <AwardSection />
        </Row>
      </Col>
      <Col lg={6}>
        <CastSection />
      </Col>
    </Row>
  );
}

export default MovieExtraDetails;
