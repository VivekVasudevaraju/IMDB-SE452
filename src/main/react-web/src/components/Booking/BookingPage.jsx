import React from "react";
import { Link } from "react-router-dom";
import { Container, Form, InputGroup, FormControl } from "react-bootstrap";
import Movie from "../Movies/Movie";
import "./BookingPage.css";

const BookingPage = () => {
  return (
    <Container className="col-lg-12 d-flex justify-content-between mt-3">
      <div className="col-lg-4 mr-3">
        <h4>Doctor Strange</h4>
        <Movie
          title="Doctor Strange"
          imageUrl="https://m.media-amazon.com/images/M/MV5BNWM0ZGJlMzMtZmYwMi00NzI3LTgzMzMtNjMzNjliNDRmZmFlXkEyXkFqcGdeQXVyMTM1MTE1NDMx._V1_QL75_UX380_CR0,0,380,562_.jpg"
          rating="7.4"
        />
        <div className="theatres mt-5">
          <div className="theatre_location">
            <h5>Theatre locations</h5>
            <Form>
              <div key="default-radio" className="mb-3">
                <Form.Check
                  type="radio"
                  id="default-radio"
                  label="Check this switch"
                />
              </div>
            </Form>
          </div>
        </div>
      </div>
      <div className="col-lg-4 mr-3">
        <h5>Dates</h5>
        <div className="dates">
          <div className="date">
            <span>
              <text className="num_date">12</text>
            </span>
            <span>
              <text className="day">Mon</text>
            </span>
          </div>
          <div className="date">
            <text className="num_date">13</text>
            <text className="day">Tue</text>
          </div>
          <div className="date">
            <text className="num_date">14</text>
            <text className="day">Wed</text>
          </div>
          <div className="date">
            <text className="num_date">15</text>
            <text className="day">Thu</text>
          </div>
          <div className="date">
            <text className="num_date">16</text>
            <text className="day">Fri</text>
          </div>
        </div>
        <br />
        <br />
        <h5>Showtimes</h5>
        <div className="col-lg-12 d-flex flex-wrap mr-3">
          <div className="showtime col-lg-3">
            <span>
              <text>10:10 AM</text>
            </span>
          </div>
          <div className="showtime col-lg-3">
            <span>
              <text>12:00 PM</text>
            </span>
          </div>
          <div className="showtime col-lg-3">
            <span>
              <text>12:00 PM</text>
            </span>
          </div>
          <div className="showtime col-lg-3">
            <span>
              <text>12:00 PM</text>
            </span>
          </div>
          <div className="showtime col-lg-3">
            <span>
              <text>12:00 PM</text>
            </span>
          </div>
        </div>
        <br />
        <br />
        <h5>Number of tickets</h5>
        <InputGroup className="mb-3">
          <InputGroup.Text id="inputGroup-sizing-default">
            # of tickets
          </InputGroup.Text>
          <FormControl
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
          />
        </InputGroup>
      </div>
      <div className="col-lg-4">
        <div className="col-lg-12 ticket">
          <h5 style={{ padding: "1rem 0 0 1rem;" }}>Ticket Booking</h5>
        </div>
        <div className="col-lg-12"></div>
      </div>
    </Container>
  );
};

export default BookingPage;
