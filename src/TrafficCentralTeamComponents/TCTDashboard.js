import React from "react";
import { Col, Container, Row } from "reactstrap";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Location from "./Location";
import Violations from "./Violations";
import FineCollected from "./FineCollected";
import Menu from "./Menu";

function TCTDashboard() {
  return (
    <div>
      <Container>
        <h1 className="text-center">Traffic Central Team</h1>
        <Row className="my-4">
          <Col md={3}>
            <Menu />
          </Col>
          <Col>
            <Routes>
              <Route path="/location" element={<Location />} />
              <Route path="/traffic-violations" element={<Violations />} />
              <Route path="/fine-collection" element={<FineCollected />} />
            </Routes>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default TCTDashboard;
