import React, { useState, useContext, useEffect } from "react";
import { useResource } from "react-request-hook";
import { Modal, Form, Button } from "react-bootstrap";
import StateContext from "../../store/Contexts";
import "./MovieRating.css";
import { Rating } from "react-simple-star-rating";

const MovieRating = ({ show, handleClose }) => {
  const [ratingLevel, setRating] = useState(0);
  const [saveRatingFailed, setSaveRatingFailed] = useState(false);

  const [rate, storeRating] = useResource(() => ({
    url: "/api/rating/",
    method: "post",
    data: { ratingLevel },
  }));

  useEffect(() => {
    if (rate && rate.isLoading === false && (rate.data || rate.error)) {
      if (rate.error) {
        setSaveRatingFailed(true);
      } else {
        setSaveRatingFailed(false);
        console.log(rate.data);
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
            storeRating(ratingLevel);
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
                ratingValue={ratingLevel}
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
              disabled={ratingLevel.length === 0}
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
