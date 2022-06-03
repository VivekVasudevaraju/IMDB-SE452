import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import { Rating } from "react-simple-star-rating";
import "./MovieInformation.css";

function MovieInformation() {
  return (
    <Row className="justify-content-center mt-3 movie-content-container">
      <Col lg={6}>
        <Row>
          <Col>
            <Image
              src="https://m.media-amazon.com/images/M/MV5BNWM0ZGJlMzMtZmYwMi00NzI3LTgzMzMtNjMzNjliNDRmZmFlXkEyXkFqcGdeQXVyMTM1MTE1NDMx._V1_QL75_UX380_CR0,0,380,562_.jpg"
              fluid
            />
          </Col>
          <Col className="d-flex flex-column">
            <h2>Doctor Strange</h2>
            <Row className="align-items-center">
              <Col lg={6} className="overflow-auto">
                <small className="me-3">Action</small>
                <small className="me-3">Comedy</small>
                <small>Drama</small>
              </Col>
              <Col lg={6}>
                <Rating
                  ratingValue={3}
                  emptyColor="#f5c518"
                  iconsCount={5}
                  readonly="true"
                  size={25}
                />
              </Col>
            </Row>
            <div className="movie-description-container mt-3">
              <p>
                Integer leo sapien, fermentum in ante eget, interdum vehicula
                neque. Etiam id diam at arcu vulputate ultricies dictum eget
                tortor. Mauris dolor lorem, fermentum et dolor quis, pretium
                commodo sapien. Etiam maximus augue eget scelerisque fermentum.
                Phasellus nisl purus, pulvinar vitae mollis malesuada, vehicula
                eget neque. Nam tincidunt turpis diam, at fermentum arcu gravida
                aliquam. Praesent purus est, maximus vitae nulla ac,
                sollicitudin blandit massa. Donec eget ante dictum orci
                facilisis molestie quis nec mauris. Morbi bibendum pharetra
                egestas. Fusce tristique, nibh sit amet scelerisque accumsan,
                orci sem convallis velit, id facilisis est lorem id magna. Duis
                sit amet leo semper, commodo elit non, cursus diam. Donec mauris
                est, auctor at nulla in, pellentesque pharetra sapien. Nulla
                facilisi. Etiam fringilla fermentum vulputate.
              </p>
            </div>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default MovieInformation;
