import React from "react";
import { Row, Col } from "react-bootstrap";
import Movie from "../Movies/Movie";
import "./Category.css";

const Category = ({ title, movies }) => {
  return (
    <>
      <h4 style={{ padding: "1em 0em 1em 0em" }}>{title}</h4>
      <Row className="category-row">
        {movies.map((movie) => (
          <Col key={movie.movieId}>
            <Movie
              key={movie.movieId}
              title={movie.movieTitle}
              imageUrl={movie.movieImg}
              rating="7.4"
              movieId={movie.movieId}
            />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Category;
