import React from "react";
import { Col, Container, Row } from "reactstrap";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Menu from "./Menu";
import Home from "./Home";
import RegisterViolation from "./RegisterViolation";
import IssueTicket from "./IssueTicket";
import Sos from "./Sos";
import MedicalHelp from "./MedicalHelp";

function Dashboard() {
  return (
    <div>
      <h1 className="text-center">Traffic Inspector</h1>
      <Row className="m-5">
        <Col md={3}>
          <Menu />
        </Col>
        <Col md={1}></Col>
        <Col md={6}>
          <Container className="bg-light border" fluid="md">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/register-violation/*" element={<RegisterViolation />} />
              <Route path="/register-violation/issue-ticket" element={<IssueTicket />} />
              <Route path="/sos" element={<Sos />} />
              <Route path="/medical-help" element={<MedicalHelp />} />
            </Routes>
          </Container>
        </Col>
      </Row>
    </div>
  );
}

export default Dashboard;
