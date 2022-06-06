import React, { useEffect, useContext, useState, useResource } from "react";
import { Container } from "react-bootstrap";
import { Rating } from "react-simple-star-rating";
import StateContext from "../../store/Contexts";
import { useParams } from "react-router-dom";
import "./BookingPage.css";
import axios from "axios";
import $ from "jquery";

const BookingPage = () => {
  const [data, setData] = useState([]);
  const [show, setShow] = useState([]);
  const [rating, setRating] = useState(0);
  const [showTheatre, selectShowTheatre] = useState("");
  const [showTime, selectShowTime] = useState("");
  const [showDate, selectShowDate] = useState("");
  const [showSeats, selectShowSeats] = useState(1);
  const { state } = useContext(StateContext);
  const { user } = state;
  const { bookingId } = useParams();
  const currentDate = new Date();

  // console.log("User", user);

  const updateTheatre = (e) => {
    let theatre_name = e.target.defaultValue;
    selectShowTheatre(theatre_name);
    let shows = [];
    data.movie_theatre.forEach((element) => {
      if (element.theatreName == theatre_name) {
        element.theatre_auditoriums.forEach((s) => {
          shows = [...shows, ...s.showtimes];
        });
      }
    });
    setShow(shows);
  };

  const selectDate = (e) => {
    selectShowDate(e.target.innerHTML);
  };

  const selectTime = (e) => {
    selectShowTime(e.target.innerHTML);
  };

  const selectSeats = (e) => {
    selectShowSeats(e.target.value);
  };

  const bookMovie = async (e) => {
    const ticket = {
      theatre: showTheatre,
      date: showDate,
      time: showTime,
      seats: showSeats,
      userName: user.userName,
    };

    console.log(ticket);

    try {
      await axios.post("/api/book", ticket);
      alert("Movie Booked!");
    } catch (error) {
      console.log(error);
    }

    // const [tickets, storeTickets] = useResource((tix) => ({
    //   url: "/api/rating/",
    //   method: "post",
    //   data: ticket,
    // }));
  };

  useEffect(() => {
    async function getData() {
      const response = await axios.get(`/api/movie/${bookingId}`);
      console.log(response.data);
      setData(response.data);

      let shows = [];
      response.data.movie_theatre[0].theatre_auditoriums.forEach((element) => {
        shows = [...shows, ...element.showtimes];
      });
      setShow(shows);

      let rating = 0;
      response.data.ratings.forEach((rat) => {
        rating += rat.ratingLevel;
      });
      setRating(rating / response.data.ratings.length);
    }
    getData();
  }, []);

  if (data.length != 0) {
    $(".btn-group > .btn").on("click", function () {
      $(this).addClass("active").siblings().removeClass("active");
    });

    return (
      <Container className="col-lg-12 d-flex justify-content-between mt-3">
        <div className="col-lg-4 d-flex flex-column mr-3">
          <div className="movie">
            <h4>{data.movieTitle}</h4>
            <div className="card" style={{ width: "75%" }}>
              <img
                className="card-img-top"
                src={data.movieImg}
                alt="Card image cap"
              ></img>
              <div className="card-body d-flex align-items-center">
                <Rating
                  ratingValue={rating}
                  emptyColor="#f5c518"
                  iconsCount={1}
                  readonly="true"
                />
                <p
                  className="card-text"
                  style={{ marginLeft: "0.5rem", fontSize: "2rem" }}
                >
                  {rating}
                </p>
              </div>
            </div>
          </div>
          <div className="theatre_location d-flex flex-column">
            <h5 style={{ marginBottom: "0.5rem", marginTop: "1.5rem" }}>
              Theatre locations
            </h5>
            {data.movie_theatre.map((element, i) => {
              return (
                <label key={i}>
                  <input
                    type="radio"
                    id={element.theatreName}
                    name="fav_language"
                    value={element.theatreName}
                    onChange={updateTheatre}
                  ></input>
                  {element.theatreName}
                </label>
              );
            })}
          </div>
        </div>
        <div className="col-lg-4 mr-3">
          <h5>Dates</h5>
          <div className="btn-toolbar" role="toolbar">
            <div
              className="btn-group d-flex flex-between"
              role="group"
              style={{ marginRight: "1rem", flexWrap: "wrap" }}
              key="date"
            >
              {[...Array(5)].map((x, i) => (
                <button
                  type="button"
                  className="btn btn-secondary select"
                  onClick={selectDate}
                >
                  {new Date(
                    currentDate.setDate(currentDate.getDate() + i)
                  ).toLocaleDateString("en-us", {
                    weekday: "short",
                    month: "short",
                    day: "numeric",
                  })}
                </button>
              ))}
            </div>
          </div>
          <br />
          <h5>Showtimes</h5>
          <div className="col-lg-12 d-flex flex-wrap mr-3">
            <div className="btn-toolbar" role="toolbar">
              <div
                className="btn-group d-flex flex-between"
                role="group"
                style={{ marginRight: "1rem", flexWrap: "wrap" }}
                key="show_time"
              >
                {show.map((element, i) => {
                  return (
                    <button
                      type="button"
                      className="btn btn-secondary select"
                      onClick={selectTime}
                    >
                      {new Date(
                        "February 04, 2021 " + element.startTime
                      ).toLocaleString("en-US", {
                        hour: "numeric",
                        minute: "numeric",
                        hour12: true,
                      })}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
          <br />
          <h5>Number of tickets</h5>
          <input
            min="1"
            max="10"
            defaultValue="1"
            type="number"
            placeholder="# of tickets"
            onChange={selectSeats}
          ></input>
        </div>
        <div className="col-lg-4">
          <div className="col-lg-12 ticket">
            <h5 style={{ padding: "1rem 0 0 1rem", fontWeight: "bold" }}>
              Ticket Booking
            </h5>
            <div className="ticket_print">
              <h6 className="print_info">{data.movieTitle}</h6>
              <div className="d-flex justify-content-between">
                <div className=" d-flex flex-column">
                  <p className="print_title">Cinema</p>
                  <p className="print_info">{showTheatre}</p>
                  <p className="print_title">Time</p>
                  <p className="print_info">{showTime}</p>
                </div>
                <div className=" d-flex flex-column">
                  <p className="print_title">Date</p>
                  <p className="print_info">{showDate}</p>
                  <p className="print_title">No. of seats</p>
                  <p className="print_info">{showSeats}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-12 checkout">
            <h5 style={{ padding: "1rem 0 0 1rem", fontWeight: "bold" }}>
              Checkout
            </h5>
            <div className="total d-flex justify-content-between">
              <p>Total</p>
              <p>${showSeats * 10}</p>
            </div>
            <button
              type="button"
              className="btn btn-success booked"
              onClick={bookMovie}
            >
              Watch Movie
            </button>
          </div>
        </div>
      </Container>
    );
  } else {
    return <div>Loading...</div>;
  }
};

export default BookingPage;
