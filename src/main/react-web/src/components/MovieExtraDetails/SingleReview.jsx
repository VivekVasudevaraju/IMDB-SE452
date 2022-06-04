import React from "react";
import { Col } from "react-bootstrap";
import './SingleReview.css'

function SingleReview() {
  return (
    <Col sm={12} className="single-review-container border-left-orange mb-3">
      <h4>Amazing title</h4>
      <div className="review-text-container">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tempus
        ipsum ut augue mattis dapibus. Curabitur sollicitudin euismod pretium.
        Pellentesque orci felis, finibus nec justo sit amet, condimentum porta
        eros. Integer semper, justo ac porttitor laoreet, dolor dui sodales
        ante, vel placerat lorem risus ac sapien. Morbi eget tortor tempus,
        mattis ligula quis, consequat ante. Donec lobortis sed velit non
        blandit. Sed non venenatis ligula. Praesent gravida viverra nibh eu
        laoreet. Nulla interdum vehicula est, eu viverra felis mattis ac.
      </p>
      </div>
    </Col>
  );
}

export default SingleReview;
