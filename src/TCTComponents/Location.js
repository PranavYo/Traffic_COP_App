import React from "react";
import { Container, Row, Col } from "reactstrap";
import SingleLocation from "./SingleLocation";

function Location() {



  return(
  <Container className="text-center">
    <h1>Location</h1>
    <Row>
      <Col>
        <h4>SOS</h4>
        <SingleLocation data={{ id: "1", Location: "Hyd", Help: true}} /><br/>
        <SingleLocation data={{ id: "1", Location: "Hyd", Help: false}} />
      </Col>
      <Col>
        <h4>Archeive</h4>
      </Col>
    </Row>
  </Container>
  )
}
export default Location;
