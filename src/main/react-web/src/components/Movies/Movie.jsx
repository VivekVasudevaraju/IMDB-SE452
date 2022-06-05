import React, { useEffect } from "react";
import { useResource } from "react-request-hook";
import { Card } from "react-bootstrap";
import "./Movie.css";
import { Rating } from "react-simple-star-rating";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Movie = ({ movieData }) => {
  const history = useHistory();

  function calculateRating() {
    let ratingTotal = 0;
    const { ratings } = movieData;

    ratings.forEach((rating) => {
      const { ratingLevel } = rating;
      ratingTotal += ratingLevel;
    });

    const avgRating = ratingTotal / ratings.length / 10;
    return Math.round(avgRating * 10) / 10;
  }

  return (
    <Card
      style={{ width: "12em", margin: "0em 1em 1em 0em", cursor: "pointer" }}
      onClick={() => history.push(`/movie/${movieData.movieId}`)}
    >
      <Card.Img variant="top" src={movieData.movieImg} />
      <Card.Body>
        <Card.Title style={{ fontSize: "1.0rem" }}>
          {movieData.movieTitle}
        </Card.Title>
        <Rating
          ratingValue={100}
          emptyColor="#f5c518"
          iconsCount={1}
          size={25}
          readonly="true"
        />
        <span className="card-rating">{calculateRating()}</span>
      </Card.Body>
    </Card>
  );
};
export default Movie;
