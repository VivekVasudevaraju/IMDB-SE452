import React from "react";
import { Col, Row } from "react-bootstrap";

function SingleActor({ actorName, characterPlayed }) {
  return (
    <Col lg={4}>
      <Row>
        <Col lg={3}>
          <span className="circle"></span>
        </Col>
        <Col lg={9}>
          <b>{actorName}</b>
          <p>{characterPlayed}</p>
        </Col>
      </Row>
    </Col>
  );
}

export default SingleActor;
