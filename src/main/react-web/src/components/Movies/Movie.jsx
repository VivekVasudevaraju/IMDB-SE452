import React, { useEffect } from "react";
import { useResource } from "react-request-hook";
import { Card } from "react-bootstrap";
import "./Movie.css";
import { Rating } from "react-simple-star-rating";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Movie = ({ title, imageUrl, rating, movieId }) => {
  const history = useHistory()
  return (
    <Card style={{ width: "12em", margin: "0em 1em 1em 0em", cursor: "pointer" }} onClick={() => history.push(`/movie/${movieId}`)}>
      <Card.Img variant="top" src={imageUrl} />
      <Card.Body>
        <Card.Title style={{ fontSize: "1.0rem" }}>{title}</Card.Title>
        <Rating
          ratingValue={rating}
          emptyColor="#f5c518"
          iconsCount={1}
          readonly="true"
        />
        <span className="card-rating" style={{ fontSize: "1rem" }}>
          {rating}
        </span>
      </Card.Body>
    </Card>
  );
};

export default Movie;
