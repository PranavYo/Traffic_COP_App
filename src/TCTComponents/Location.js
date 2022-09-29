import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import SingleArcheive from "./SingleArcheive";
import SingleLocation from "./SingleLocation";

function Location() {
  const [locations, setlocations] = useState([
    { id: "1", Location: "Hyd", Help: true, Contact: '7858784784' },
    { id: "1", Location: "Hyd", Help: false, Contact: '7858784784' },
    { id: "1", Location: "Hyd", Help: false, Contact: '7858784784' },
    { id: "1", Location: "Hyd", Help: true, Contact: '7858784784' },
    { id: "1", Location: "Hyd", Help: true, Contact: '7858784784' },
  ]);

  return (
    <Container >
      <h1 className="text-center">Location</h1>
      <Row>
        <Col>
          <h4 className="text-center">SOS</h4>
          {
          locations.length > 0
            ? locations.map((item) => <SingleLocation data={item} />)
            : "No data"
          }
        </Col>
        <Col>
          <h4 className="text-center">Archeive</h4>
          {
          locations.length > 0
            ? locations.map((item) => <SingleArcheive data={item} />)
            : "No data"
          }
        </Col>
      </Row>
    </Container>
  );
}
export default Location;
