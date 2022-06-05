import React, { useState, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useResource } from "react-request-hook";
import { Modal, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import StateContext from "../../store/Contexts";
import { useOktaAuth } from "@okta/okta-react";
import "./MovieRating.css";
import { Rating } from "react-simple-star-rating";

const MovieRating = ({ movie, myRating, show, handleClose }) => {
  const [rating, setRating] = useState(myRating);
  const history = useHistory();
  const [saveRatingFailed, setSaveRatingFailed] = useState(false);
  const { authState } = useOktaAuth();
  const { state } = useContext(StateContext);
  const { user } = state;

  const [rate, storeRating] = useResource((ratingLevel) => ({
    url: "/api/rating/",
    method: "post",
    data: { ratingLevel, user, movie },
  }));

  const [updateRate, UpdateRating] = useResource((ratingId, ratingLevel) => ({
    url: `/api/rating/${ratingId}`,
    method: "put",
    data: { ratingLevel, user, movie },
  }));

  useEffect(() => {
    if (rate && rate.isLoading === false && (rate.data || rate.error)) {
      if (rate.error) {
        setSaveRatingFailed(true);
      } else {
        setSaveRatingFailed(false);
        console.log(rate.data);
        setRating(rate.data);
        handleClose();
        history.push("/");
      }
    }
  }, [rate]);

  useEffect(() => {
    if (
      updateRate &&
      updateRate.isLoading === false &&
      (updateRate.data || updateRate.error)
    ) {
      if (updateRate.error) {
        setSaveRatingFailed(true);
      } else {
        setSaveRatingFailed(false);
        console.log(updateRate.data);
        setRating(updateRate.data);
        handleClose();
        history.push("/");
      }
    }
  }, [updateRate]);

  const handleRating = (rate) => {
    setRating({
      ...rating,
      ratingLevel: rate,
    });
  };

  const validate = () => {
    if (!authState || !authState.isAuthenticated) {
      history.push("/login");
      handleClose();
    } else {
      console.log(movie);
      if (rating.ratingId == 0) {
        storeRating(rating.ratingLevel);
      } else {
        UpdateRating(rating.ratingId, rating.ratingLevel);
      }
    }
  };

  console.log(rating);
  return (
    <>
      <Modal show={show} onHide={handleClose} centered="true">
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            validate();
          }}
        >
          <Modal.Header closeButton>
            <Modal.Title className="movie-title">Rating</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Label className="movie-name" htmlFor="movie-title">
              <h4>{movie.movieTitle}</h4>
            </Form.Label>
            <div className="movie-rating">
              <Rating
                onClick={handleRating}
                ratingValue={rating.ratingLevel}
                fillColor="#65A1F0"
                iconsCount={10}
              />
            </div>
            {saveRatingFailed && (
              <Form.Text style={{ color: "red" }}>
                Something happend wrong. Please try again...
              </Form.Text>
            )}
          </Modal.Body>
          <Modal.Footer className="justify-content-center">
            <Button
              variant="dark"
              className="rate-button"
              disabled={rating.ratingLevel.length === 0}
              type="submit"
            >
              Rate
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
};

export default MovieRating;
