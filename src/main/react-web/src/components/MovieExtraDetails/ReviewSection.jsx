import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import SingleReview from "./SingleReview";
import { useHistory } from "react-router-dom";

function ReviewSection({reviews, movieId}) {
  const history = useHistory()
  return (
    <Col lg={5}>
      <Row>
        <Col sm={12} className="d-flex flex-col justify-content-between">
          <h3>Reviews</h3>
          <Button className="review-button rounded" size="sm" onClick={() => history.push(`/userreviews/${movieId}`)}>See All Reviews</Button>
        </Col>
        {reviews?.slice(0, 3).map((review, index) => (<SingleReview key={index} title={review.reviewTitle} text={review.reviewText} />))}
      </Row>
    </Col>
  );
}

export default ReviewSection;
