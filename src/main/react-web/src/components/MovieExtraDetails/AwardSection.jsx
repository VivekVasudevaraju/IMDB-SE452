import React from "react";
import { Col, Row } from "react-bootstrap";
import SingleAward from "./SingleAward";

function AwardSection({awards=[]}) {
  return (
    <Col lg={{span: 5, offset:2}}>
      <Row>
        <Col lg={12} className="d-flex justify-content-between">
          <h3>Awards</h3>
        </Col>
        {awards.map((award) => (
          <SingleAward key={award.id}  awardTitle={award.awardTitle}/> 
        ))}
      </Row>
    </Col>
  );
}

export default AwardSection;
