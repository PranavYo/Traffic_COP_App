import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Menu from './Menu'
import Home from './Home'
import RegisterViolation from './RegisterViolation'
import IssueTicket from './IssueTicket'
import Sos from './Sos'
import MedicalHelp from './MedicalHelp'


function Dashboard() {
  return (
    <div>
        <h1 className='text-center'>Traffic Inspector</h1>
        <Row className='m-4'>
            <Col md={4}>
                <Menu/>
            </Col>
            <Col>
                <Routes>
                    <Route path='/' element={<Home/>} />
                    <Route path='/register-violation' element={<RegisterViolation/>} />
                    <Route path='/issue-ticket' element={<IssueTicket/>} />
                    <Route path='/sos' element={<Sos/>} />
                    <Route path='/medical-help' element={<MedicalHelp/>} />
                </Routes>
            </Col>
        </Row>
    </div>
  );
}

export default Dashboard;
