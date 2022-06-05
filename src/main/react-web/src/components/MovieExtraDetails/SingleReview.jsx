import React from "react";
import { Col } from "react-bootstrap";
import './SingleReview.css'

function SingleReview({title, text}) {
  return (
    <Col sm={12} className="single-review-container border-left-orange mb-3">
      <h4>{title}</h4>
      <div className="review-text-container">
      <p>
        {text}
      </p>
      </div>
    </Col>
  );
}

export default SingleReview;
