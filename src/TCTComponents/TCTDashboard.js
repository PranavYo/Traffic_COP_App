import React from "react";
import { useState } from "react";
import {
  NavItem,
  NavLink,
  Nav,
  Col,
  Row,
  TabContent,
  TabPane,
  Container,
} from "reactstrap";

import Location from "./Location";
import Violations from "./Violations";
import FineCollected from "./FineCollected";
import {useAuth} from '../LoginComponents/AuthProvider'


function TCTDashboard() {
  const [act, setact] = useState("1");
  const [active1, setactive1] = useState("active");
  const [active2, setactive2] = useState("");
  let auth = useAuth()

  function change2() {
      setact("2");
      setactive2("active");
      setactive1("");
    } 

  function change1(){
      setact("1");
      setactive1("active");
      setactive2("");
    }


  return (
    <Container className="bg-light border" fluid="md">
      <h1 className="text-center">Traffic Central Team</h1>
      <div>
        <Nav tabs>
          <NavItem>
            <NavLink className={active1} onClick={change1}>
              SOS Locations
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className={active2} onClick={change2}>
              Violation and Fine Collection Data
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink onClick={auth.logout}>
              Logout
            </NavLink>
          </NavItem>
        </Nav>

        <TabContent activeTab={act}>
          <TabPane tabId="1">
            <Location />
          </TabPane>
          <TabPane tabId="2">
            <Row>
              <Col className="bg-light border">
                <Violations />
              </Col>
              <Col className="bg-light border">
                <FineCollected />
              </Col>
            </Row>
          </TabPane>
        </TabContent>
        
      </div>
    </Container>
  );
}

export default TCTDashboard;
