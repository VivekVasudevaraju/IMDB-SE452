import React, { useEffect } from "react";
import { useResource } from "react-request-hook";
import { Card } from "react-bootstrap";
import "./Movie.css";
import { Rating } from "react-simple-star-rating";

const Movie = ({ title, imageUrl, rating }) => {
  return (
    <Card style={{ width: "12rem" }}>
      <Card.Img variant="top" src={imageUrl} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Rating
          ratingValue={rating}
          emptyColor="#f5c518"
          iconsCount={1}
          readonly="true"
        />
        <span className="card-rating">{rating}</span>
      </Card.Body>
    </Card>
  );
};

export default Movie;
