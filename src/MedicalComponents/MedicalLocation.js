import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import SingleArcheive from "./SingleArcheive";
import SingleLocation from "./SingleLocation";

function MedicalLocation() {
  const [locations, setlocations] = useState([
    { id: "1", Location: "Hyd", Help: true, Contact: '7858784784' },
    { id: "1", Location: "Hyd", Help: false, Contact: '7858784784' },
    { id: "1", Location: "Hyd", Help: false, Contact: '7858784784' },
    { id: "1", Location: "Hyd", Help: true, Contact: '7858784784' },
    { id: "1", Location: "Hyd", Help: true, Contact: '7858784784' },
  ]);

  return (
    <Container >
      <Row>
        <Col>
          <h3 className="text-center">Help Required Locations</h3>
          {
          locations.length > 0
            ? locations.map((item) => <SingleLocation data={item} />)
            : "No data"
          }
        </Col>
        <Col>
          <h3 className="text-center">Archeive</h3>
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
export default MedicalLocation;
