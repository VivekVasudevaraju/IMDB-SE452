import React from "react";
import { Col, Row } from "react-bootstrap";
import "./CastSection.css";
import SingleActor from "./SingleActor";

function CastSection({cast}) {
  return (
    <Row>
      <Col lg={12}>
        <h2>Cast</h2>
      </Col>
      <Col lg={12}>
        <Row>
          {cast.map((actor) => ( <SingleActor actorName={actor.actorName} characterPlayed={actor.actorCharacter} /> ))}
          </Row>
      </Col>
    </Row>
  );
}

export default CastSection;
