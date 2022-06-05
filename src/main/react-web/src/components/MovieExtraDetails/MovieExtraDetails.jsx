import React from "react";
import { Col, Row } from "react-bootstrap";
import ReviewSection from "./ReviewSection";
import './MovieExtraDetails.css'
import AwardSection from "./AwardSection";
import CastSection from "./CastSection";

function MovieExtraDetails({reviews, movieId, awards, cast}) {
  return (
    <Row className="mt-5">
      <Col lg={6}>
        <Row>
          <ReviewSection reviews={reviews} movieId={movieId}/>
          <AwardSection  awards={awards}/>
        </Row>
      </Col>
      <Col lg={6}>
        <CastSection cast={cast}/>
      </Col>
    </Row>
  );
}

export default MovieExtraDetails;
