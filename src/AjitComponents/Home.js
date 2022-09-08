import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Menu from './Menu'
import RegisterViolation from './RegisterViolation'
import IssueTicket from './IssueTicket'
import Sos from './Sos'
import MedicalHelp from './MedicalHelp'


function Home() {
  return (
    <Router>
      <Container>
            <h1 className='text-center'>Traffic Inspector</h1>
            <Row className='my-4'>
                <Col md={4}>
                    <Menu/>
                </Col>
                <Col>
                    <Routes>
                        <Route path='/register-violation' element={<RegisterViolation/>} />
                        <Route path='/issue-ticket' element={<IssueTicket/>} />
                        <Route path='/sos' element={<Sos/>} />
                        <Route path='/medical-help' element={<MedicalHelp/>} />
                    </Routes>
                </Col>
            </Row>
      </Container>
    </Router>
  );
}

export default Home;