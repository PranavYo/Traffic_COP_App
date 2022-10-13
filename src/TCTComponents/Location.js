import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import SingleArcheive from "./SingleArcheive";
import SingleLocation from "./SingleLocation";
import axios from "axios";
import { useEffect } from "react";
import base_url from "../base_url";


function Location() {

  useEffect(() => {
    //document.title = 'Traffic Central Team Dashboard'
    getAllLocations()
  }, [])
  
  const getAllLocations=()=>
  {
    axios.get(`${base_url}/getlocations`).then(
      (response) => {
        setlocations(response.data)
        console.log(response.data, 'here')
      },
      (error) => {
        console.log('data not loaded')
      }
    )
  }

  const [locations, setlocations] = useState([]);

  return (
    <Container >

      <h1 className="text-center p-3 mb-2 bg-success text-white"  onClick={getAllLocations}>Location</h1>
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
