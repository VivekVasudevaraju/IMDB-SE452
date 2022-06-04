import React from "react";
import { Col, Row } from "react-bootstrap";
import "./CastSection.css";
import SingleActor from "./SingleActor";

function CastSection() {
  return (
    <Row>
      <Col lg={12}>
        <h2>Cast</h2>
      </Col>
      <Col lg={12}>
        <Row>
          <SingleActor
            actorName="Actor #1"
            characterPlayed="Character played"
          />
          <SingleActor
            actorName="Actor #1"
            characterPlayed="Character played"
          />
          <SingleActor
            actorName="Actor #1"
            characterPlayed="Character played"
          />
          <SingleActor
            actorName="Actor #1"
            characterPlayed="Character played"
          />
          <SingleActor
            actorName="Actor #1"
            characterPlayed="Character played"
          />
          <SingleActor
            actorName="Actor #1"
            characterPlayed="Character played"
          />
          <SingleActor
            actorName="Actor #1"
            characterPlayed="Character played"
          />
        </Row>
      </Col>
    </Row>
  );
}

export default CastSection;
