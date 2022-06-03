import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import SingleReview from "./SingleReview";

function ReviewSection() {
  return (
    <Col lg={5}>
      <Row>
        <Col lg={12} className="d-flex justify-content-between">
          <h3>Reviews</h3>
          <Button className="review-button rounded" size="sm">See All Reviews</Button>
        </Col>
        <SingleReview />
      </Row>
    </Col>
  );
}

export default ReviewSection;
