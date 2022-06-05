import React from "react";
import { Row, Spinner } from "react-bootstrap";

function Loading(){
    return (
        <Row className="justify-content-center text-center">
            <Spinner animation="border" variant="warning" />
            <p>Gathering Movie Details...</p>
        </Row>
    )
}

export default Loading