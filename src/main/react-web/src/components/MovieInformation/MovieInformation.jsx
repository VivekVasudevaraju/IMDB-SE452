import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import { Rating } from "react-simple-star-rating";
import "./MovieInformation.css";

function MovieInformation({movieData}) {

  function calculateRating(){
    let ratingTotal = 0
    const {ratings} = movieData

    ratings.forEach((rating) => {
      const {ratingLevel} = rating
      ratingTotal += ratingLevel * 10
    })

    return ratingTotal / ratings.length
  }

  return (
    <Row className="justify-content-center mt-3 movie-content-container">
      <Col lg={6}>
        <Row>
          <Col>
            <Image
              src={movieData.movieImg}
              fluid
            />
          </Col>
          <Col className="d-flex flex-column">
            <h2>{movieData.movieTitle}</h2>
            <Row className="align-items-center">
              <Col lg={6} className="overflow-auto">
                <small className="me-3">Action</small>
                <small className="me-3">Comedy</small>
                <small>Drama</small>
              </Col>
              <Col lg={6}>
                <Rating
                  ratingValue={calculateRating()}
                  emptyColor="#efe6c4"
                  fillColor="#f5c518"
                  iconsCount={5}
                  readonly="true"
                  size={25}
                  allowHalfIcon
                />
              </Col>
            </Row>
            <div className="movie-description-container mt-3">
              <p>
                {movieData.movieDescription}
              </p>
            </div>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default MovieInformation;
