import React, { useState, useContext } from "react";
import { Col, Image, Row } from "react-bootstrap";
import { Rating } from "react-simple-star-rating";
import MovieRating from "../Rating/MovieRating";
import StateContext from "../../store/Contexts";
import "./MovieInformation.css";

function MovieInformation({ movieData }) {
  const [showRating, setShowRating] = useState(false);
  const { state } = useContext(StateContext);
  const { user } = state;
  var myRating = { ratingId: 0, ratingLevel: 0 };

  function calculateRating() {
    let ratingTotal = 0;
    const { ratings } = movieData;

    ratings.forEach((rating) => {
      const { ratingLevel } = rating;
      ratingTotal += ratingLevel;
    });

    return ratingTotal / ratings.length;
  }

  function findUserRating() {
    const { ratings } = movieData;

    const yourRating = ratings.find(
      (rating) => rating.user.userName == user.userName
    );

    if (yourRating) {
      myRating = {
        ratingId: yourRating.ratingId,
        ratingLevel: yourRating.ratingLevel,
      };
    }

    return yourRating?.ratingLevel;
  }

  return (
    <Row className="justify-content-center mt-3 movie-content-container">
      <Col lg={6}>
        <Row>
          <Col>
            <Image src={movieData.movieImg} fluid />
          </Col>
          <Col className="d-flex flex-column">
            <h2>{movieData.movieTitle}</h2>
            <Row className="align-items-center">
              <Col lg={6} className="overflow-auto">
                {movieData.genres.map((genre) => (
                  <small className="me-3">{genre.name}</small>
                ))}
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
              <Col lg={6}>
                <span className="yourRating">Your Rating</span>
                <Rating
                  ratingValue={findUserRating()}
                  onClick={() => setShowRating(true)}
                  emptyColor="#efe6c4"
                  fillColor="#65A1F0"
                  iconsCount={1}
                  size={25}
                  allowHalfIcon
                />
                <MovieRating
                  movie={movieData}
                  myRating={myRating}
                  show={showRating}
                  handleClose={() => setShowRating(false)}
                />
              </Col>
            </Row>
            <div className="movie-description-container mt-3">
              <p>{movieData.movieDescription}</p>
            </div>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default MovieInformation;
