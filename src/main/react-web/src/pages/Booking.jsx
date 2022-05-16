import React from "react";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import Movie from "../components/Movies/Movie";

const Booking = () => {
  return (
    <Container className="col-lg-12 d-flex justify-content-between">
      <div className="col-lg-3 text-center">
        <h4>Doctor Strange</h4>
        <Movie
          title="Doctor Strange"
          imageUrl="https://m.media-amazon.com/images/M/MV5BNWM0ZGJlMzMtZmYwMi00NzI3LTgzMzMtNjMzNjliNDRmZmFlXkEyXkFqcGdeQXVyMTM1MTE1NDMx._V1_QL75_UX380_CR0,0,380,562_.jpg"
          rating="7.4"
        />
      </div>
      <div className="col-lg-3 text-center">
        <h4>Dates</h4>
      </div>
      <div className="col-lg-3 text-center">
        <h4>Ticket Booking</h4>
      </div>
    </Container>
  );
};

export default Booking;
