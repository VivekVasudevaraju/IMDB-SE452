import React, { useState, useContext, useEffect } from "react";
import { useResource } from "react-request-hook";
import { Modal, Form, Button } from "react-bootstrap";
import StateContext from "../../store/Contexts";
import "./MovieRating.css";
import { Rating } from "react-simple-star-rating";

const MovieRating = ({ show, handleClose }) => {
  const { dispatch } = useContext(StateContext);
  const [rating, setRating] = useState(0);
  const [saveRatingFailed, setSaveRatingFailed] = useState(false);

  const [rate, storeRating] = useResource(() => ({
    url: "/rest/rate/",
    method: "post",
    data: { rating },
  }));

  useEffect(() => {
    if (rate && rate.isLoading === false && (rate.data || rate.error)) {
      if (rate.error) {
        setSaveRatingFailed(true);
      } else {
        setSaveRatingFailed(false);
        // dispatch({
        //   type: "LOGIN",
        //   id: user.data.id,
        //   username,
        //   access_token: user.data.access_token,
        // });
        handleClose();
      }
    }
  }, [rate]);

  const handleRating = (rate) => {
    setRating(rate);
  };

  return (
    <>
      <Modal show={show} onHide={handleClose} centered="true">
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            storeRating(rating);
          }}
        >
          <Modal.Header closeButton>
            <Modal.Title className="movie-title">Rating</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Label className="movie-name" htmlFor="movie-title">
              <h4>Avatar: The Way of Water</h4>
            </Form.Label>
            <div className="movie-rating">
              <Rating
                onClick={handleRating}
                ratingValue={rating}
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
              disabled={rating.length === 0}
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
